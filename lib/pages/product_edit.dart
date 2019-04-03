import 'dart:io';
import 'package:flutter/material.dart';
import 'package:scoped_model/scoped_model.dart';

import '../models/location_data.dart';
import '../models/product.dart';
import '../scoped-models/main.dart';
import '../widgets/form_inputs/image_input.dart';
import '../widgets/form_inputs/location.dart';

class ProductEditPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _ProductEditPageState();
  }
}

class _ProductEditPageState extends State<ProductEditPage> {
  final Map<String, dynamic> _formData = {
    'title': null,
    'description': null,
    'price': null,
    'image': null,
    'location': null,
  };
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final _titleFocusNode = FocusNode();
  final _descriptionFocusNode = FocusNode();
  final _priceFocusNode = FocusNode();
  final _titleTextEditController = TextEditingController();
  final _descriptionTextEditController = TextEditingController();
  final _priceTextEditController = TextEditingController();

  Widget _buildTitleTextField(Product product) {
    // no products and no values entered
    if (product == null && _titleTextEditController.text.trim() == '') {
      _titleTextEditController.text = '';
    }
    // we have a product and we have empty input
    else if (product != null && _titleTextEditController.text.trim() == '') {
      _titleTextEditController.text = product.title;
    }
    // we have a produce and user did edit something
    else if (product != null && _titleTextEditController.text != '') {
      _titleTextEditController.text = _titleTextEditController.text;
    }
    // we got no product and user did enter something
    else if (product == null && _titleTextEditController.text.trim() != '') {
      _titleTextEditController.text = _titleTextEditController.text;
    } else {
      _titleTextEditController.text = '';
    }
    return TextFormField(
      focusNode: _titleFocusNode,
      decoration: InputDecoration(labelText: 'Product Title'),
      // initialValue: product == null ? '' : product.title,
      validator: (String value) {
        // if (value.trim().length <= 0) {
        if (value.isEmpty || value.length < 5) {
          return 'Title is required and should be 5+ characters long.';
        }
      },
      controller: _titleTextEditController,
      onSaved: (String value) {
        _formData['title'] = value;
      },
    );
  }

  Widget _buildDescriptionTextField(Product product) {
    if (product == null && _descriptionTextEditController.text.trim() == '') {
      _descriptionTextEditController.text = '';
    }
    // we have a product and we have empty input
    else if (product != null &&
        _descriptionTextEditController.text.trim() == '') {
      _descriptionTextEditController.text = product.description;
    }
    return TextFormField(
      focusNode: _descriptionFocusNode,
      maxLines: 4,
      decoration: InputDecoration(labelText: 'Product Description'),
      controller: _descriptionTextEditController,
//      initialValue: product == null ? '' : product.description,
      validator: (String value) {
        // if (value.trim().length <= 0) {
        if (value.isEmpty || value.length < 10) {
          return 'Description is required and should be 10+ characters long.';
        }
      },
      onSaved: (String value) {
        _formData['description'] = _descriptionTextEditController.text;
      },
    );
  }

  Widget _buildPriceTextField(Product product) {
    if (product == null && _priceTextEditController.text.trim() == '') {
      _priceTextEditController.text = '';
    }
    // we have a product and we have empty input
    else if (product != null && _priceTextEditController.text.trim() == '') {
      _priceTextEditController.text = product.price.toString();
    }
    return TextFormField(
      focusNode: _priceFocusNode,
      controller: _priceTextEditController,
      keyboardType: TextInputType.number,
      decoration: InputDecoration(labelText: 'Product Price'),
//      initialValue: product == null ? '' : product.price.toString(),
      validator: (String value) {
        // if (value.trim().length <= 0) {
        if (value.isEmpty ||
            !RegExp(r'^(?:[1-9]\d*|0)?(?:[.,]?\d+)r?$').hasMatch(value)) {
          return 'Price is required and should be a number.';
        }
      },
    );
  }

  Widget _buildSubmitButton() {
    return ScopedModelDescendant<MainModel>(
      builder: (BuildContext context, Widget child, MainModel model) {
        return model.isLoading
            ? Center(child: CircularProgressIndicator())
            : RaisedButton(
                child: Text('Save'),
                textColor: Colors.white,
                onPressed: () => _submitForm(
                    model.addProduct,
                    model.updateProduct,
                    model.selectProduct,
                    model.selectedProductIndex),
              );
      },
    );
  }

  Widget _buildPageContent(BuildContext context, Product product) {
    final double deviceWidth = MediaQuery.of(context).size.width;
    final double targetWidth = deviceWidth > 550.0 ? 500.0 : deviceWidth * 0.95;
    final double targetPadding = deviceWidth - targetWidth;
    return GestureDetector(
      onTap: () {
        FocusScope.of(context).requestFocus(FocusNode());
      },
      child: Container(
        margin: EdgeInsets.all(10.0),
        child: Form(
          key: _formKey,
          child: ListView(
            padding: EdgeInsets.symmetric(horizontal: targetPadding / 2),
            children: <Widget>[
              _buildTitleTextField(product),
              _buildDescriptionTextField(product),
              _buildPriceTextField(product),
              SizedBox(
                height: 16.0,
              ),
              LocationInput(_setLocation, product),
              ImageInput(_setImage, product),
              SizedBox(
                height: 10.0,
              ),
              _buildSubmitButton(),
              // GestureDetector(
              //   onTap: _submitForm,
              //   child: Container(
              //     color: Colors.green,
              //     padding: EdgeInsets.all(5.0),
              //     child: Text('My Button'),
              //   ),
              // )
            ],
          ),
        ),
      ),
    );
  }

  void _setLocation(LocationStorageData locData) {
    _formData['location'] = locData;
  }

  void _setImage(File image) {
    _formData['image'] = image;
  }

  void _submitForm(
      Function addProduct, Function updateProduct, Function setSelectedProduct,
      [int selectedProductIndex]) {
    if (!_formKey.currentState.validate() || (_formData['image'] == null && selectedProductIndex == -1)) {
      return;
    }
    _formKey.currentState.save();
    if (selectedProductIndex == -1) {
      addProduct(
        _titleTextEditController.text,
        _descriptionTextEditController.text,
        _formData['image'],
        double.parse(_priceTextEditController.text.replaceFirst(RegExp(','), '.'),),
        _formData['location'],
      ).then((bool success) {
        if (success) {
          Navigator.pushReplacementNamed(context, '/products');
        } else {
          showDialog(
              context: context,
              builder: (BuildContext context) {
                return AlertDialog(
                  title: Text('Something went wrong'),
                  content: Text('Please try again'),
                  actions: <Widget>[
                    FlatButton(
                      onPressed: () => Navigator.of(context).pop(),
                      child: Text('Okay'),
                    )
                  ],
                );
              });
        }
      });
    } else {
      updateProduct(
        _titleTextEditController.text,
        _descriptionTextEditController.text,
        _formData['image'],
        double.parse(_priceTextEditController.text.replaceFirst(RegExp(','), '.'),),
        _formData['location'],
      ).then((_) => Navigator.pushReplacementNamed(context, '/products'));
    }
  }

  @override
  Widget build(BuildContext context) {
    return ScopedModelDescendant<MainModel>(
      builder: (BuildContext context, Widget child, MainModel model) {
        print('build edit screen');
        print(model.selectedProductIndex);
        final Widget pageContent =
            _buildPageContent(context, model.selectedProduct);
        return model.selectedProductIndex == -1
            ? Material(
                child: pageContent,
              )
            : Scaffold(
                appBar: AppBar(
                  title: Text('Edit Product'),
                  automaticallyImplyLeading: false,
                ),
                body: pageContent,
              );
      },
    );
  }
}
