import 'dart:convert';

import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:trafic_tm/screens/updateprofile.dart';
import 'package:trafic_tm/shared/customtext.dart';
import 'package:auth0_flutter/auth0_flutter.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:get_storage/get_storage.dart';
import 'package:line_awesome_flutter/line_awesome_flutter.dart';

import '../shared/constants.dart';
import '../wrapper.dart';

class Home extends StatefulWidget {


  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  late Auth0 auth0;

  final storage = GetStorage();

  late Map<String, dynamic> credentialsMap;

  Credentials? credentials;


  /* ElevatedButton(
                onPressed: () async {
                  storage.remove('loginstatus');
                  storage.write('loginstatus', 'false');
                  await auth0.webAuthentication().logout(useHTTPS: true);
                  setState(() {

                  });
                },
                child: const Text(
                    'Log out!',
                  style: CustomTextStyle.customText3,
                )
            )*/





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

    String s = 'Settings';
    bool isDark = MediaQuery.of(context).platformBrightness == Brightness.dark;
    var textColor = isDark ? Colors.white : Colors.black;

    if(storage.read('loginstatus') == 'false') {
      return const Wrapper();
    }
    else
    {
      if(storage.read('credentials') != null)
      {
        print(storage.read('credentials'));
        credentialsMap = jsonDecode(storage.read('credentials'));
        //print(credentialsMap);
        //credentials = Credentials.fromMap(credentialsMap);
      }
      return Scaffold(
        appBar: AppBar(
          backgroundColor: primaryColor,
          centerTitle: true,
          title: const Text(
            'Profile',
            style: CustomTextStyle.customText,
          ),
          actions: [
            IconButton(
                onPressed: () {

                },
                icon: Icon(isDark? LineAwesomeIcons.sun : LineAwesomeIcons.moon, color: Colors.black,)
            ),
          ],
        ),
        body: SingleChildScrollView(
            child: Container(
              height: MediaQuery.of(context).size.height,
              width: MediaQuery.of(context).size.width,
              alignment: Alignment.center,
              color: isDark ? Colors.black87 : Colors.white,
              padding: const EdgeInsets.all(30),
              child: Column(
                children: [
                  Stack(
                    children: [
                      SizedBox(
                        width:  120, height: 120,
                        child: ClipRRect(borderRadius: BorderRadius.circular(100), child: const Image(image: AssetImage('images/profileimg.png'),)),
                      ),
                      Positioned(
                        bottom: 0,
                        right: 0,
                        child: Container(
                          width: 35,
                          height: 35,
                          decoration: BoxDecoration(borderRadius: BorderRadius.circular(100), color: primaryColor),
                          child: const Icon(
                            LineAwesomeIcons.pencil_alt_solid,
                            color: Colors.black,
                            size: 20,
                          ),
                        ),
                      )
                    ],
                  ),
                  const SizedBox(height: 10,),
                  Text(
                    '${credentialsMap['lastname']} ${credentialsMap['firstname']}',
                    style: CustomTextStyle.customText4.apply(color: textColor),
                  ),
                  Text(
                    '${credentialsMap['email']}',
                    style:CustomTextStyle.customText5.apply(color: textColor),
                  ),
                  const SizedBox(height: 10,),
                  SizedBox(
                    width: 200,
                    child: ElevatedButton(
                      onPressed: () {
                        Navigator.push(context, MaterialPageRoute(builder: (context) => const UpdateProfileScreen()));
                      },
                      style: ElevatedButton.styleFrom(
                          backgroundColor: primaryColor,side: BorderSide.none, shape: const StadiumBorder()
                      ),
                      child: const Text('Edit Profile', style: CustomTextStyle.customText6,),
                    ),
                  ),
                  const SizedBox(height: 30,),
                  const Divider(),
                  const SizedBox(height: 10),
                  ProfileMenuWidget(title: "Settings", icon: LineAwesomeIcons.cog_solid, onPress: () {  }, textColor: textColor,),
                  ProfileMenuWidget(title: "Billing Details", icon: LineAwesomeIcons.wallet_solid, onPress: () {  },textColor: textColor,),
                  const Divider(),
                  const SizedBox(height: 10,),
                  ProfileMenuWidget(
                    title: "Logout",
                    icon: LineAwesomeIcons.sign_out_alt_solid,
                    onPress: () async {
                      storage.remove('loginstatus');
                      storage.write('loginstatus', 'false');
                      await auth0.webAuthentication(scheme: "demo").logout(useHTTPS: false);
                      setState(() {

                      });
                    },
                    textColor: Colors.red,
                    endIcon: false,
                  ),
                ],
              ),
            )
        ),
      );
    }
  }
}

class ProfileMenuWidget extends StatelessWidget {
  const ProfileMenuWidget({
    super.key,
    required this.title,
    required this.icon,
    required this.onPress,
    this.endIcon = true,
    this.textColor = Colors.black,
  });

  final String title;
  final IconData icon;
  final VoidCallback onPress;
  final bool endIcon;
  final Color? textColor;

  @override
  Widget build(BuildContext context) {

    Constants constants = Constants();
    Color? primaryColor = constants.getPrimaryColor();

    return ListTile(
      onTap: onPress,
      leading: Container(
        width: 40,
        height: 40,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(100),
          color: primaryColor?.withOpacity(0.1),
        ),
        child: Icon(icon, color: primaryColor,),
      ),
      title: Text(title,style: CustomTextStyle.customText7.apply(color: textColor),),
      trailing: endIcon ? Container(
        width: 30,
        height: 30,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(800),
          color: Colors.grey.withOpacity(0.1),
        ),
        child: const Icon(LineAwesomeIcons.angle_right_solid, size: 18.0, color: Colors.grey,),
      ) : null,
    );
  }
}
