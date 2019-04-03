import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import '../../models/product.dart';

class ImageInput extends StatefulWidget {
  final Function setImage;
  final Product product;

  ImageInput(this.setImage, this.product);

  @override
  State<StatefulWidget> createState() {
    return _ImageInputState();
  }
}

class _ImageInputState extends State<ImageInput> {
  File _imageFile;

  void _getImage(BuildContext context, ImageSource source) {
    ImagePicker.pickImage(source: source, maxWidth: 400).then((File image) {
      setState(() {
        _imageFile = image;
      });
      widget.setImage(image);
      Navigator.pop(context);
    });
  }

  void _buildBottomSheet(BuildContext context) {
    showModalBottomSheet(
        context: context,
        builder: (BuildContext context) {
          return Container(
            height: 200.0,
            alignment: Alignment.centerLeft,
            padding: EdgeInsets.only(top: 20.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.start,
              children: <Widget>[
                Text(
                  'Select Photo',
                  style: TextStyle(
                    fontSize: 24.0,
                    fontWeight: FontWeight.w400,
                  ),
                  textAlign: TextAlign.left,
                ),
                Divider(),
                ListTile(
                  leading: Icon(Icons.add_photo_alternate),
                  title: Text('From Gallery'),
                  onTap: () {
                    _getImage(context, ImageSource.gallery);
                  },
                ),
                ListTile(
                  leading: Icon(Icons.add_a_photo),
                  title: Text('From Camera'),
                  onTap: () {
                    _getImage(context, ImageSource.camera);
                  },
                )
              ],
            ),
          );
        });
  }

  @override
  Widget build(BuildContext context) {
    final buttonAccentColor = Theme.of(context).accentColor;
    Widget previewImage = Container(
      decoration: BoxDecoration(
        border: Border.all(
          color: Colors.white12,
          style: BorderStyle.solid,
          width: 1.0,
        ),
      ),
      padding: EdgeInsets.all(16.0),
      margin: EdgeInsets.only(top: 16.0, bottom: 16.0),
      child: Center(
        child: Text('Select an image', style: TextStyle(color: Colors.white24),),
      ),
    );
    if (_imageFile != null) {
      previewImage = Image.file(
        _imageFile,
        fit: BoxFit.cover,
        height: 300,
        width: MediaQuery.of(context).size.width,
        alignment: Alignment.center,
      );
    } else if (widget.product != null) {
      previewImage = Image.network(
        widget.product.image,
        fit: BoxFit.cover,
        height: 300,
        width: MediaQuery.of(context).size.width,
        alignment: Alignment.center,
      );
    }
    return Column(
      children: <Widget>[
        OutlineButton(
          borderSide: BorderSide(
            color: buttonAccentColor,
            width: 2.0,
            style: BorderStyle.solid,
          ),
          onPressed: () {
            print('pressed button');
            _buildBottomSheet(context);
          },
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Icon(
                Icons.camera_alt,
                color: buttonAccentColor,
              ),
              SizedBox(width: 16.0),
              _imageFile == null
                  ? Text('Add Image',
                      style: TextStyle(color: buttonAccentColor))
                  : Text(
                      'Change Image',
                      style: TextStyle(color: buttonAccentColor),
                    ),
            ],
          ),
        ),
        previewImage,
        Divider(),
      ],
    );
  }
}
