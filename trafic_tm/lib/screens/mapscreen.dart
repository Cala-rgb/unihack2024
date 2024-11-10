import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:trafic_tm/services/apihandler.dart';
import 'package:trafic_tm/shared/customtext.dart';
import 'package:geolocator/geolocator.dart';

import '../models/parkingSpaceModel.dart';

class MapScreen extends StatefulWidget {
  const MapScreen({super.key});

  @override
  State<MapScreen> createState() => _MapScreenState();
}

class _MapScreenState extends State<MapScreen> {

  Set<Polygon> all_polygons = {};
  bool polygonSelected = false;
  String _polygonName = "";
  int _freespaces = 0;
  int _totalspaces = 0;
  String _zone = "";
  double _price = 0.0;
  String _idSelected = "";

  Future<Position> _determinePosition() async {
    bool serviceEnabled;
    LocationPermission permission;
    print('test100000000000000000000');

    // Test if location services are enabled.
    serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      // Location services are not enabled don't continue
      // accessing the position and request users of the
      // App to enable the location services.
      return Future.error('Location services are disabled.');
    }

    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        // Permissions are denied, next time you could try
        // requesting permissions again (this is also where
        // Android's shouldShowRequestPermissionRationale
        // returned true. According to Android guidelines
        // your App should show an explanatory UI now.
        return Future.error('Location permissions are denied');
      }
    }

    if (permission == LocationPermission.deniedForever) {
      // Permissions are denied forever, handle appropriately.
      return Future.error(
          'Location permissions are permanently denied, we cannot request permissions.');
    }

    // When we reach here, permissions are granted and we can
    // continue accessing the position of the device.
    print('2222222222222222222222222222222222222222');
    print(await Geolocator.getCurrentPosition());
    dynamic result = await Geolocator.getCurrentPosition();
    lat = result.latitude;
    lon = result.longitude;
    _center = LatLng(lat, lon);
    print("test ${lat} ${lon}");

    return result;
  }

  LatLng _center = LatLng(0, 0);

  late double lat = 0.0,lon = 0.0;

  @override
  Widget build(BuildContext context) {

    bool isDark = MediaQuery.of(context).platformBrightness == Brightness.dark;
    var textColor = isDark ? Colors.white : Colors.black;

    late GoogleMapController mapController;

    void _showModalSheet() {
      showModalBottomSheet(
          context: context,
          builder: (builder) {
            return Container(
              color: Colors.transparent,
              child: Container(
                width: double.infinity,
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.only(
                    topLeft: const Radius.circular(10),
                    topRight: const Radius.circular(10),
                  ),
                ),
                child: Column(
                  children: <Widget>[
                    Container(
                      padding: EdgeInsets.all(10),
                      child: Text(
                      _polygonName,
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 24,
                        ),
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.all(10),
                      child: Text(
                        "Free spaces: ${_freespaces}",
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 18,
                        ),
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.all(10),
                      child: Text(
                        "Total spaces: ${_totalspaces}",
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 18,
                        ),
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.all(10),
                      child: Text(
                        "Price: ${_price} RON/h",
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 18,
                        ),
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.all(10),
                      child: Text(
                        "Zone: ${_zone}",
                        style: TextStyle(
                          color: Colors.black,
                          fontSize: 18,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            );
          });
    }

    Set<Polygon> polygonsFromParking(List<Parking> parkingSpaces) {
      int con = 0;
      Set<Polygon> polygons = {};
      print(parkingSpaces.length);
      for (Parking parking in parkingSpaces) {
        String id = (con++).toString() + parking.name;
        List<LatLng> points = [];
        for (List<double> point in parking.geometry.coordinates[0]) {
          points.add(LatLng(point[1], point[0]));
        }
        Color color;
        if(parking.freeSpaces/parking.totalSpaces < 0.33)
        {
          color = Colors.red;
        } else if(parking.freeSpaces/parking.totalSpaces < 0.66) {
          color = Colors.yellow;
        } else {
          color = Colors.green;
        }
        polygons.add(Polygon(
          polygonId: PolygonId(id),
          points: points,
          strokeWidth: 2,
          strokeColor: (id == _idSelected) ? Colors.white : color,
          fillColor: (id == _idSelected) ? Colors.white.withOpacity(0.15) : color.withOpacity(0.15),
          consumeTapEvents: true,
          onTap: () {
            setState(() {
              polygonSelected = true;
              _polygonName = parking.name;
              _freespaces = parking.freeSpaces;
              _price = parking.price;
              _zone = parking.zone;
              _idSelected = id;
              _totalspaces = parking.totalSpaces;
              _showModalSheet();
            });
          },

        ));
      }
      return polygons;
    }

    void _onMapCreated(GoogleMapController controller) {
      mapController = controller;
      print('33333333333333333333333333333333');
      print(_center);
      _center = LatLng(lat, lon);
      print(_center);
      print('43333333333333333333333333333333');

    }

    ApiHandler api = ApiHandler();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Map',style: CustomTextStyle.customText,),
        centerTitle: true,
        backgroundColor: Colors.teal[800],

      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            DrawerHeader(
              decoration: BoxDecoration(
                color: Colors.blue,
              ),
              child: Text(
                'Menu',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 24,
                ),
              ),
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Toate Parcările'),
              onTap: () {
                Navigator.pop(context);
                ApiHandler().getAllParkingSpace().then((value) {
                  setState(() {
                    all_polygons = polygonsFromParking(value);
                  });
                });
              },
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Parcări TIMPARK Albastre'),
              onTap: () {
                // Handle Settings tap
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Parcări TIMPARK Galbene'),
              onTap: () {
                // Handle About tap
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Parcări TIMPARK Rosii'),
              onTap: () {
                // Handle About tap
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Parcări TIMPARK Verzi'),
              onTap: () {
                // Handle About tap
                Navigator.pop(context);
              },
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Parcări TIMPARK Verzi Progresive'),
              onTap: () {
                // Handle About tap
                Navigator.pop(context);
              },
            ),
          ],
        ),
      ),
      body: FutureBuilder<Position>(
        future: _determinePosition(),
        builder: (BuildContext context, AsyncSnapshot<Position> snapshot) {
          Widget child;
          if (snapshot.hasData) {
            child =
              GoogleMap(
                onMapCreated: _onMapCreated,
                initialCameraPosition: CameraPosition(
                  target: _center,
                  zoom: 11.0,
                ),
                polygons: all_polygons,
              );
          } else if (snapshot.hasError) {
            child =
              const Icon(
                Icons.error_outline,
                color: Colors.red,
                size: 60,
              );
          } else {
            child = SizedBox(
                width: 60,
                height: 60,
                child: CircularProgressIndicator(),
              );
          }
          return Center(
              child: child
          );
        },
      ),
    );
  }
}

/*
return GoogleMap(
                onMapCreated: _onMapCreated,
                initialCameraPosition: CameraPosition(
                  target: _center,
                  zoom: 11.0,
                ),
                polygons: all_polygons,
              );
 */
