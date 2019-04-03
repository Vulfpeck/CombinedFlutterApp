import 'package:flutter/material.dart';
import 'package:scoped_model/scoped_model.dart';

import '../../models/product.dart';
import '../../scoped-models/main.dart';

class ProductCard extends StatelessWidget {
  final Product product;

  ProductCard(this.product);

  Widget _buildTitlePriceRow() {
    return ScopedModelDescendant<MainModel>(
      builder: (BuildContext context, Widget child, MainModel model) {
        return Column(
          mainAxisAlignment: MainAxisAlignment.end,
          crossAxisAlignment: CrossAxisAlignment.end,
          children: <Widget>[
            Container(
              padding: EdgeInsets.only(
                  top: 24.0, left: 24.0, right: 24.0, bottom: 16.0),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Expanded(
                    child: Container(
                      child: Text(
                        product.title,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                          fontWeight: FontWeight.w700,
                          fontSize: 24.0,
                        ),
                      ),
                    ),
                  ),
                  FlatButton(
                    onPressed: () {
                      model.selectProduct(product.id);
                      model.toggleProductFavoriteStatus();
                    },
                    child: Row(
                      children: <Widget>[
                        Icon(
                          product.isFavorite
                              ? Icons.favorite
                              : Icons.favorite_border,
                          color: Colors.red,
                        ),
                        SizedBox(
                          width: 8.0,
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Row(
              children: <Widget>[
                Expanded(
                  child: Container(
                    padding: EdgeInsets.only(left: 24.0, right: 24.0),
                    child: Text(
                      '\$${product.price.toString()} • ${product.location.address}',
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontSize: 16.0,
                      ),
                    ),
                  ),
                ),
              ],
            ),
            Row(
              children: <Widget>[
                Expanded(
                  child: Container(
                    padding: EdgeInsets.only(
                        left: 24.0, right: 24.0, top: 8.0, bottom: 24.0),
                    child: Text(
                      '${product.description}',
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        color: Theme.of(context).hintColor,
                        fontSize: 16.0,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ],
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return ScopedModelDescendant<MainModel>(
        builder: (BuildContext context, Widget child, MainModel model) {
      return GestureDetector(
        onTap: () {
          model.selectProduct(product.id);
          Navigator.pushNamed<bool>(context, '/product/' + product.id)
              .then((_) {
            model.selectProduct(null);
          });
        },
        child: Card(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Hero(
                tag: product.id,
                child: FadeInImage(
                  image: NetworkImage(product.image),
                  fit: BoxFit.cover,
                  width: MediaQuery.of(context).size.width,
                  height: MediaQuery.of(context).size.height * 0.30,
                  placeholder: AssetImage('assets/placeholder.png'),
                ),
              ),
              _buildTitlePriceRow(),
            ],
          ),
        ),
      );
    });
  }
}
