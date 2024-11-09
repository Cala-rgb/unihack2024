import 'dart:convert';

import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:trafic_tm/screens/home.dart';
import 'package:auth0_flutter/auth0_flutter.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:get_storage/get_storage.dart';
import 'package:trafic_tm/shared/customtext.dart';

import '../profileview.dart';
import '../shared/constants.dart';
import '../wrapper.dart';

class LogIn extends StatefulWidget {
  const LogIn({super.key});

  @override
  State<LogIn> createState() => _LogInState();
}

class _LogInState extends State<LogIn> {
  Credentials? _credentials;

  late Auth0 auth0;
  final storage = GetStorage();

  @override
  void initState() {
    super.initState();
    String domain = dotenv.env["AUTH0_DOMAIN"]!;
    String client = dotenv.env["AUTH0_CLIENT_ID"]!;
    auth0 = Auth0(domain, client);

  }

  @override
  Widget build(BuildContext context) {

    Constants constants = Constants();
    Color? primaryColor = constants.getPrimaryColor();


    bool isDark = MediaQuery.of(context).platformBrightness == Brightness.dark;

    if(_credentials == null)
    {
      return Scaffold(
        appBar: AppBar(
          title: const Text(
            'Welcome to O${"'"}Block!',
            style: CustomTextStyle.customText,
          ),
          backgroundColor: primaryColor,
          centerTitle: true,
        ),
        body:
        Center(
          child: Container(
            height: MediaQuery.of(context).size.height,
            width: MediaQuery.of(context).size.width,
            alignment: Alignment.center,
            color: isDark ? Colors.black87 : Colors.white,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: <Widget>[
                ElevatedButton(
                    style: ButtonStyle(
                      backgroundColor: MaterialStateProperty.all<Color>(primaryColor!),
                    ),
                    onPressed: () async {
                      // Use a Universal Link callback URL on iOS 17.4+ / macOS 14.4+
                      // useHTTPS is ignored on Android
                      final credentials =
                      await auth0.webAuthentication(scheme: "demo").login(useHTTPS: false);
                      storage.write('loginstatus', 'true');

                      Map<String, dynamic> credentialsMap = {
                        'firstname' : credentials.user.givenName,
                        'lastname' : credentials.user.familyName,
                        'email' : credentials.user.email,
                        'userid' : credentials.idToken,
                        //'profilepic' : credentials.user.pictureUrl
                      };
                      String credentialsJson = jsonEncode(credentialsMap);
                      print(credentialsJson);
                      storage.write('credentials', credentialsJson);


                      setState(() {
                        _credentials = credentials;
                      });
                    },
                    child: const Text(
                      "Log in",
                      style: CustomTextStyle.customText2,
                    )
                )
              ],
            ),
          ),
        ),
      );
    }
    else
    {
      return Wrapper();
    }
  }
}
