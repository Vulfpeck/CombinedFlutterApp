import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:location/location.dart' as geoloc;

import '../../models/location_data.dart';
import '../../models/product.dart';


class LocationInput extends StatefulWidget {
  final Function setLocation;
  final Product product;

  LocationInput(this.setLocation, this.product);

  @override
  _LocationInputState createState() => _LocationInputState();
}

class _LocationInputState extends State<LocationInput> {
  LocationStorageData _locationData;
  Uri _staticMapUri;
  final TextEditingController _addressInputController = TextEditingController();
  // create a focus node to manage the address input
  final FocusNode _addressInputFocusNode = FocusNode();
  bool _loadingData = false;

  @override
  void initState() {
    // create a listener started when widget is created
    // needs a method that's executed everytime event is fired
    // this continues listening even if widget is destroyed
    // dispose() is used to stop listener when widget gets destroyed
    _addressInputFocusNode.addListener(_updateLocation);
    if (widget.product != null) {
      // if we have a product we don't want to geocode again
      getStaticMap(widget.product.location.address, geocode: false);
    }
    super.initState();
  }

  @override
  void dispose() {
    // remove the event listener
    _addressInputFocusNode.removeListener(_updateLocation);
    super.dispose();
  }

  // this method if fired everytime a listener operates
  void _updateLocation() {
    // we only want to work when losing focus, not when we get focus
    if (!_addressInputFocusNode.hasFocus) {
      // update the value store in the _locationdData
      getStaticMap(_addressInputController.text);
    }
  }

  void _getUserLocation() async {
    setState(() {
      _loadingData = !_loadingData;
    });
    final locationObject = new geoloc.Location();
    var currentLocation;
    bool hasPermission = await locationObject.hasPermission();
    try {
      currentLocation = await locationObject.getLocation();
      print(hasPermission);
      print(currentLocation.latitude);
      print(currentLocation.longitude);
      http.Response response = await http.get(
          'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${currentLocation.latitude}&lon=${currentLocation.longitude}');
      final decodedResponse = json.decode(response.body);
      print(decodedResponse.toString());
      getStaticMap(
        decodedResponse['display_name'],
        geocode: false,
        lat: double.parse(decodedResponse['lat']),
        lon: double.parse(decodedResponse['lon']),
      );
      setState(() {
        _loadingData = !_loadingData;
      });
    } catch (error) {
      setState(() {
        _loadingData = !_loadingData;
      });
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Could not get location'),
            content: Text('Enter location manualy'),
            actions: <Widget>[
              FlatButton(
                child: Text('Okay'),
                onPressed: () => Navigator.pop(context),
              )
            ],
          );
        },
      );
    }
  }

  // fetches the map image, is async
  void getStaticMap(String address,
      {geocode: true, double lat, double lon}) async {
    //if address is empty then there is invalid address
    if (address.isEmpty) {
      setState(() {
        _staticMapUri = null;
      });
      widget.setLocation(null);
    }

    if (geocode) {
      address = address.replaceAll(' ', '+');
      print(' ================================' + address);
      http.Response response = await http.get(
          'https://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=$address&format=json&limit=1');
      final decodedResponse = json.decode(response.body);
      print(decodedResponse);
      // get the first element and display_name
      final formattedAddress = decodedResponse[0]['display_name'];
      final double lat = double.parse(decodedResponse[0]['lat']);
      final double lng = double.parse(decodedResponse[0]['lon']);

      _locationData = LocationStorageData(
          address: formattedAddress, latitude: lat, longitude: lng);
      print(formattedAddress.toString());
      // final StaticMapProvider staticMapViewProvider =
      //     new StaticMapProvider(map_key);
      // the provider returns what's essentially a link, or a Uri
      // final Uri staticMapUri = staticMapViewProvider.getStaticUriWithMarkers(
      //   [
      //     Marker(
      //       'position',
      //       'Position',
      //       locationData.lat,
      //       locationData.lng,
      //     ),
      //   ],
      //   center: Location(_locationData.lat, _locationData.lng),
      //   width: 500,
      //   height: 300,
      //   maptype: StaticMapViewType.roadmap,
      // );
    } else if (lat == null && lon == null) {
      _locationData = widget.product.location;
    } else {
      _locationData = new LocationStorageData(
          address: address, longitude: lon, latitude: lat);
    }
    widget.setLocation(_locationData);
    if (mounted) {
      setState(() {
        _addressInputController.text = _locationData.address;
        // save the new data into the class' Uri
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        TextFormField(
          controller: _addressInputController,
          focusNode: _addressInputFocusNode,
          validator: (String value) {
            if (_locationData == null || value.isEmpty) {
              return 'No valid location found';
            }
          },
          decoration: InputDecoration(
            labelText: 'Enter the address',
          ),
        ),
        SizedBox(
          height: 8.0,
        ),
        _loadingData
            ? Container(
                child: Row(
                  children: <Widget>[
                    SizedBox(
                      height: 24.0,
                      width: 24.0,
                      child: CircularProgressIndicator(),
                    ),
                    SizedBox(width: 16.0),
                    Text(
                      'Loading Location',
                      style: TextStyle(color: Theme.of(context).accentColor),
                    )
                  ],
                  mainAxisAlignment: MainAxisAlignment.center,
                ),
                height: 48.0,
              )
            : Container(
                height: 48.0,
                child: FlatButton(
                  onPressed: _getUserLocation,
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      Icon(
                        Icons.location_searching,
                        color: Theme.of(context).accentColor,
                      ),
                      SizedBox(width: 16.0),
                      Text(
                        'Get User Location',
                        style: TextStyle(color: Theme.of(context).accentColor),
                      ),
                    ],
                  ),
                ),
              ),
        SizedBox(
          height: 8.0,
        ),
        _staticMapUri == null
            ? Container()
            : Image.network(_staticMapUri.toString()),
        Divider(),
      ],
    );
  }
}
