import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:scoped_model/scoped_model.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../scoped-models/main.dart';
import '../../models/product.dart';

class ProductFab extends StatefulWidget {
  final Product product;

  ProductFab(this.product);

  @override
  _ProductFabState createState() => _ProductFabState();
}

class _ProductFabState extends State<ProductFab> with TickerProviderStateMixin {
// TickerProviderStateMixin is required for the vsync property

  AnimationController _controller;

  @override
  void initState() {
    // setting vsync to 'this' sets the animation to only run if the view is visible
    // and the object is on screen
    _controller = new AnimationController(
      vsync: this,
      duration: Duration(
        milliseconds: 200,
      ),
    );
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return ScopedModelDescendant<MainModel>(
      builder: (BuildContext context, Widget child, MainModel model) {
        return Column(
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            Container(
              margin: EdgeInsets.only(bottom: 16.0),
              child: ScaleTransition(
                scale: CurvedAnimation(
                  parent: _controller,
                  curve: Interval(
                    0.0,
                    1.0,
                    curve: Curves.easeInOutSine,
                  ),
                ),
                child: FloatingActionButton(
                  backgroundColor: Theme.of(context).cardColor,
                  onPressed: () async {
                    final url = 'mailto:${widget.product.userEmail}';
                    if (await canLaunch(url)) {
                      await launch(url);
                    } else {
                      throw 'Could not launch';
                    }
                  },
                  heroTag: 'contact',
                  mini: true,
                  child: Icon(
                    Icons.mail,
                    color: Theme.of(context).accentColor,
                  ),
                ),
              ),
            ),
            Container(
              margin: EdgeInsets.only(bottom: 16.0),
              child: ScaleTransition(
                scale: CurvedAnimation(
                  parent: _controller,
                  curve: Interval(
                    0.0,
                    0.5,
                    curve: Curves.easeInOutSine,
                  ),
                ),
                child: FloatingActionButton(
                  backgroundColor: Theme.of(context).cardColor,
                  onPressed: () {
                    model.selectProduct(widget.product.id);
                    model.toggleProductFavoriteStatus();
                  },
                  heroTag: 'favorite',
                  mini: true,
                  child: Icon(
                    model.selectedProduct.isFavorite
                        ? Icons.favorite
                        : Icons.favorite_border,
                    color: Colors.red,
                  ),
                ),
              ),
            ),
            FloatingActionButton(
              onPressed: () {
                // if we've never played the animation
                if (_controller.isDismissed) {
                  // then play the animation in forward direction
                  _controller.forward();
                } else {
                  _controller.reverse();
                }
              },
              child: AnimatedBuilder(
                animation: _controller,
                builder: (BuildContext context, Widget child) {
                  return Transform(
                    alignment: FractionalOffset.center,
                    transform: Matrix4.rotationZ(
                      _controller.value * 0.5 * math.pi,
                    ),
                    child: Icon(
                      _controller.isDismissed ? Icons.more_vert : Icons.close,
                    ),
                  );
                },
              ),
            ),
          ],
        );
      },
    );
  }
}
