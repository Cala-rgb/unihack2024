import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:trafic_tm/services/apihandler.dart';
import 'package:trafic_tm/shared/customtext.dart';

class MapScreen extends StatefulWidget {
  const MapScreen({super.key});

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {
  @override
  Widget build(BuildContext context) {

    bool isDark = MediaQuery.of(context).platformBrightness == Brightness.dark;
    var textColor = isDark ? Colors.white : Colors.black;

    late GoogleMapController mapController;

    final LatLng _center = const LatLng(45.75372, 21.22571);

    void _onMapCreated(GoogleMapController controller) {
      mapController = controller;
    }

    ApiHandler api = ApiHandler();

    Set<Polygon> poligoane = api.getPolygons();

    print(poligoane);

    return Scaffold(
      appBar: AppBar(
        title: const Text('Map',style: CustomTextStyle.customText,),
        centerTitle: true,
        backgroundColor: Colors.teal[800],

      ),
      body: GoogleMap(
        mapType: MapType.normal,
        onMapCreated: _onMapCreated,
        initialCameraPosition: CameraPosition(
          target: _center,
          zoom: 11.0,
        ),
        polygons: poligoane,
      )
    );
  }
}
