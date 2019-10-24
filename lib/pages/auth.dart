import 'package:flutter/material.dart';
import 'package:scoped_model/scoped_model.dart';

import '../models/auth.dart';
import '../scoped-models/main.dart';

class AuthPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _AuthPageState();
  }
}

class _AuthPageState extends State<AuthPage> with TickerProviderStateMixin {
  final Map<String, dynamic> _formData = {
    'email': null,
    'password': null,
    'acceptTerms': false
  };
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController _emailTextController = TextEditingController();
  final TextEditingController _passwordTextController = TextEditingController();
  AuthMode _authMode = AuthMode.Login;
  AnimationController _controller;
  Animation<Offset> _slideModeAnimation;
  Animation<Offset> _slideFormLoginAnimation;
  Animation<Offset> _slideFormSignupAnimation;

  void initState() {
    _controller = AnimationController(
      vsync: this,
      duration: Duration(
        milliseconds: 350,
      ),
    );

    _slideModeAnimation = Tween<Offset>(
      begin: Offset(0.75, 8.0),
      end: Offset(-0.75, 8.0),
    ).animate(
      CurvedAnimation(
        parent: _controller,
        curve: Curves.easeInOutExpo,
      ),
    );
    _slideFormLoginAnimation = Tween<Offset>(
      begin: Offset(0.0, 0.0),
      end: Offset(2.0, 0.0),
    ).animate(
      CurvedAnimation(
        parent: _controller,
        curve: Curves.easeInOutExpo,
      ),
    );
    _slideFormSignupAnimation = Tween<Offset>(
      begin: Offset(-2.0, 0.0),
      end: Offset(0.0, 0.0),
    ).animate(
      CurvedAnimation(
        parent: _controller,
        curve: Curves.easeInOutExpo,
      ),
    );
    super.initState();
  }

  Widget _buildEmailTextField() {
    return TextFormField(
      decoration: InputDecoration(
          labelText: 'E-Mail',
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8.0),
          )),
      keyboardType: TextInputType.emailAddress,
      controller: _emailTextController,
      validator: (String value) {
        if (value.isEmpty ||
            !RegExp(r"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                .hasMatch(value)) {
          return 'Please enter a valid email';
        }
      },
      onSaved: (String value) {
        _formData['email'] = _emailTextController.text;
      },
    );
  }

  Widget _buildPasswordTextField() {
    return TextFormField(
      decoration: InputDecoration(
          labelText: 'Password',
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8.0),
          )),
      obscureText: true,
      controller: _passwordTextController,
      validator: (String value) {
        if (value.isEmpty || value.length < 6) {
          return 'Password invalid';
        }
      },
      onSaved: (String value) {
        _formData['password'] = value;
      },
    );
  }

  Widget _buildPasswordConfirmTextField() {
    return TextFormField(
      decoration: InputDecoration(
          labelText: 'Confirm Password',
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8.0),
          )),
      obscureText: true,
      validator: (String value) {
        if (value != _passwordTextController.text &&
            _authMode == AuthMode.Signup) {
          return 'Password\'s do not match';
        }
      },
    );
  }

  Widget _buildAcceptSwitch() {
    return SwitchListTile(
      value: _formData['acceptTerms'],
      onChanged: (bool value) {
        setState(() {
          _formData['acceptTerms'] = value;
        });
      },
      title: Text('Accept Terms'),
    );
  }

  void _submitForm(Function authenticate) async {
    if (!_formKey.currentState.validate() || !_formData['acceptTerms']) {
      return;
    }
    _formKey.currentState.save();

    Map<String, dynamic> successInformation;

    successInformation = await authenticate(
      _emailTextController.text,
      _passwordTextController.text,
      _authMode,
    );
    if (successInformation['success']) {
      print("****** success ****");
      Navigator.pushReplacementNamed(context, '/');
    } else {
      showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text('An error occured!'),
              content: Text(successInformation['message']),
              actions: <Widget>[
                FlatButton(
                  child: Text('Okay'),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ],
            );
          });
    }
  }

  Widget _buildLoginForm() {
    return SlideTransition(
      position: _slideFormLoginAnimation,
      child: Card(
        clipBehavior: Clip.antiAlias,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(
            Radius.circular(12.0),
          ),
        ),
        elevation: 2.0,
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            children: <Widget>[
              _buildEmailTextField(),
              SizedBox(
                height: 10.0,
              ),
              _buildPasswordTextField(),
              SizedBox(
                height: 10.0,
              ),
              Divider(),
              _buildAcceptSwitch(),
              Divider(),
              SizedBox(
                height: 10.0,
              ),
              ScopedModelDescendant<MainModel>(
                builder: (BuildContext context, Widget child, MainModel model) {
                  return model.isLoading
                      ? Center(child: CircularProgressIndicator())
                      : RaisedButton(
                          clipBehavior: Clip.antiAlias,
                          elevation: 5.0,
                          padding: EdgeInsets.only(
                            left: 32.0,
                            right: 32.0,
                            top: 16.0,
                            bottom: 16.0,
                          ),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.all(
                              Radius.circular(56.0),
                            ),
                          ),
                          textColor: Colors.white,
                          child: Text('LOGIN'),
                          onPressed: () => _submitForm(model.authenticate),
                        );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildSignUpForm() {
    return SlideTransition(
      position: _slideFormSignupAnimation,
      child: Card(
        clipBehavior: Clip.antiAlias,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(
            Radius.circular(12.0),
          ),
        ),
        elevation: 2.0,
        child: Container(
          padding: EdgeInsets.all(24.0),
          child: Column(
            children: <Widget>[
              _buildEmailTextField(),
              SizedBox(
                height: 10.0,
              ),
              _buildPasswordTextField(),
              SizedBox(
                height: 10.0,
              ),
              _buildPasswordConfirmTextField(),
              SizedBox(
                height: 10.0,
              ),
              Divider(),
              _buildAcceptSwitch(),
              Divider(),
              SizedBox(
                height: 10.0,
              ),
              ScopedModelDescendant<MainModel>(
                builder: (BuildContext context, Widget child, MainModel model) {
                  return model.isLoading
                      ? Center(child: CircularProgressIndicator())
                      : RaisedButton(
                          clipBehavior: Clip.antiAlias,
                          elevation: 5.0,
                          padding: EdgeInsets.only(
                            left: 32.0,
                            right: 32.0,
                            top: 16.0,
                            bottom: 16.0,
                          ),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.all(
                              Radius.circular(56.0),
                            ),
                          ),
                          color: Theme.of(context).primaryColor,
                          textColor: Colors.white,
                          child: Text('SIGN UP'),
                          onPressed: () => _submitForm(model.authenticate),
                        );
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTopRow() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Stack(
          alignment: Alignment.center,
          children: <Widget>[
            SlideTransition(
              position: _slideModeAnimation,
              child: Container(
                width: 120.0,
                height: 4.0,
                decoration: BoxDecoration(
                  color: Theme.of(context).accentColor,
                  borderRadius: BorderRadius.circular(56.0),
                ),
              ),
            ),
            ButtonBar(
              children: <Widget>[
                Container(
                  width: 100,
                  child: MaterialButton(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(100.0),
                      side: BorderSide(
                        style: BorderStyle.none,
                      ),
                    ),
                    height: 56.0,
                    child: Text(
                      'SIGN UP',
                      style: TextStyle(fontWeight: FontWeight.w500),
                    ),
                    onPressed: () {
                      setState(() {
                        _authMode = AuthMode.Signup;
                        _controller.forward();
                      });
                    },
                  ),
                ),
                SizedBox(
                  width: 48.0,
                ),
                Container(
                  width: 100,
                  child: MaterialButton(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(100.0),
                      side: BorderSide(
                        style: BorderStyle.none,
                      ),
                    ),
                    height: 56.0,
                    child: Text(
                      'LOGIN',
                      style: TextStyle(fontWeight: FontWeight.w500),
                    ),
                    onPressed: () {
                      _authMode = AuthMode.Login;
                      _controller.reverse();
                    },
                  ),
                )
              ],
            ),
          ],
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final double deviceWidth = MediaQuery.of(context).size.width;
    final double targetWidth = deviceWidth > 550.0 ? 500.0 : deviceWidth;

    return Scaffold(
      body: Center(
        child: SingleChildScrollView(
          physics: BouncingScrollPhysics(),
          child: Container(
            width: targetWidth,
            child: Form(
              key: _formKey,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.center,
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  SizedBox(
                    height: 24.0,
                  ),
                  Text(
                    "Meme Bucket",
                    style: TextStyle(
                      color: Theme.of(context).primaryColor,
                      fontWeight: FontWeight.w200,
                      letterSpacing: 5.0,
                      fontSize: 32.0,
                    ),
                  ),
                  SizedBox(
                    height: 24.0,
                  ),
                  _buildTopRow(),
                  Stack(
                    children: <Widget>[
                      _buildSignUpForm(),
                      _buildLoginForm(),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
