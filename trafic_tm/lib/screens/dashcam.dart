import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:trafic_tm/services/apihandler.dart';
import 'package:trafic_tm/shared/customtext.dart';
import 'package:geolocator/geolocator.dart';

import '../models/parkingSpaceModel.dart';

class Dashcam extends StatefulWidget {
  const Dashcam({super.key});

  @override
  State<Dashcam> createState() => _DashcamState();
}

class _DashcamState extends State<Dashcam> {

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dashcam',style: CustomTextStyle.customText,),
        centerTitle: true,
        backgroundColor: Colors.teal[800],
      )
    );
  }
}
