import 'package:trafic_tm/screens/home.dart';
import 'package:trafic_tm/screens/login.dart';
import 'package:trafic_tm/screens/navbar.dart';
import 'package:auth0_flutter/auth0_flutter.dart';
import 'package:flutter/cupertino.dart';
import 'package:get_storage/get_storage.dart';

class Wrapper extends StatefulWidget {


  const Wrapper({super.key});

  @override
  State<Wrapper> createState() => _WrapperState();
}

class _WrapperState extends State<Wrapper> {

  final storage = GetStorage();


  @override
  Widget build(BuildContext context) {
    print("11111111111111111111111111111111111111111111");
    return (storage.read('loginstatus') == 'true' ? true :  false) ? NavBar() : const LogIn();
  }
}
