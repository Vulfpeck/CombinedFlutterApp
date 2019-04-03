import 'package:flutter/material.dart';

class TitleDefault extends StatelessWidget {
  final String title;

  TitleDefault(this.title);

  @override
  Widget build(BuildContext context) {
    final deviceWidth =MediaQuery.of(context).size.width;
    return Text(
      title,
      overflow: TextOverflow.fade,
      softWrap: false,
      style: TextStyle(
          fontSize: deviceWidth > 500 ? 26.0 : 14.0, fontWeight: FontWeight.bold, fontFamily: 'Oswald'),
    );
  }
}
