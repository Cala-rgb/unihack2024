import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:trafic_tm/models/biketrackModel.dart';
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
  Set<Polyline> all_polylines = {};
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
    dynamic result = await Geolocator.getCurrentPosition();
    lat = result.latitude;
    lon = result.longitude;
    _center = LatLng(lat, lon);

    return result;
  }

  LatLng _center = LatLng(0, 0);

  late double lat = 0.0,lon = 0.0;

  @override
  Widget build(BuildContext context) {

    bool isDark = MediaQuery.of(context).platformBrightness == Brightness.dark;
    var textColor = isDark ? Colors.white : Colors.black;

    late GoogleMapController mapController;

    void showParkingStatusDialog(BuildContext context) {
      showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('How full is the parking near you?'),
            content: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                // List of options
                ListTile(
                  title: Text('Very clear'),
                  onTap: () => Navigator.of(context).pop('Very clear'),
                ),
                ListTile(
                  title: Text('Clear'),
                  onTap: () => Navigator.of(context).pop('Clear'),
                ),
                ListTile(
                  title: Text('Moderate'),
                  onTap: () => Navigator.of(context).pop('Moderate'),
                ),
                ListTile(
                  title: Text('Full'),
                  onTap: () => Navigator.of(context).pop('Full'),
                ),
                ListTile(
                  title: Text('Very Full'),
                  onTap: () => Navigator.of(context).pop('Very Full'),
                ),
              ],
            ),
          );
        },
      ).then((value) {
        if (value != null) {
          int number = 0;
          if (value == "Very clear") {
            number = 1;
          } else if (value == "Clear") {
            number = 2;
          } else if (value == "Moderate") {
            number = 3;
          } else if (value == "Full") {
            number = 4;
          } else if (value == "Very Full") {
            number = 5;
          }
          ApiHandler().postUserReport(lon, lat, number, "1");
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(content: Text('Parking status: $value')),
          );
        }
      });
    }

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

    Set<Polyline> pollinesFromBikeTracks(List<BikeTrack> bikeTracks) {
      int con = 0;
      Set<Polyline> polyline = {};
      for (BikeTrack biketrack in bikeTracks) {
        String id = (con++).toString() + biketrack.name;
        List<LatLng> points = [];
        for (List<double> point in biketrack.geometry.coordinates) {
          points.add(LatLng(point[1], point[0]));
        }
        polyline.add(Polyline(
          polylineId: PolylineId(id),
          points: points,
          consumeTapEvents: true,
          width: 2,
          color: Colors.green,
          onTap: () {
            setState(() {
              polygonSelected = true;
              _polygonName = biketrack.name;
              _idSelected = id;
              //_showModalSheet();
            });
          },

        ));
      }
      return polyline;
    }

    void _onMapCreated(GoogleMapController controller) {
      mapController = controller;
      _center = LatLng(lat, lon);

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
              title: Text('Parcări aproape de mine'),
              onTap: () {
                Navigator.pop(context);
                ApiHandler().getParkingSpaces(lon, lat, 0.004).then((value) {
                  setState(() {
                    all_polygons = polygonsFromParking(value);
                    all_polylines = {};
                  });
                });
              },
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Toate Parcările'),
              onTap: () {
                Navigator.pop(context);
                ApiHandler().getAllParkingSpace().then((value) {
                  setState(() {
                    all_polygons = polygonsFromParking(value);
                    all_polylines = {};
                  });
                });
              },
            ),
            ListTile(
              leading: Icon(Icons.directions_bike),
              title: Text('Piste Biciclete'),
              onTap: () {
                Navigator.pop(context);
                ApiHandler().getAllBikeTracks().then((value) {
                  setState(() {
                    all_polygons = {};
                    all_polylines = pollinesFromBikeTracks(value);
                  });
                });
              },
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Parcări TIMPARK Albastre'),
              onTap: () {
                Navigator.pop(context);
                ApiHandler().getAllParkingSpacesFromZone('Zona Albastra').then((value) {
                  setState(() {
                    all_polygons = polygonsFromParking(value);
                    all_polygons = {};
                  });
                });
              },
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Parcări TIMPARK Galbene'),
              onTap: () {
                Navigator.pop(context);
                ApiHandler().getAllParkingSpacesFromZone('Zona Galbena').then((value) {
                  setState(() {
                    all_polygons = polygonsFromParking(value);
                    all_polygons = {};
                  });
                });
              },
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Parcări TIMPARK Rosii'),
              onTap: () {
                Navigator.pop(context);
                ApiHandler().getAllParkingSpacesFromZone('Zona Rosie').then((value) {
                  setState(() {
                    all_polygons = polygonsFromParking(value);
                    all_polygons = {};
                  });
                });
              },
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Parcări TIMPARK Verzi'),
              onTap: () {
                Navigator.pop(context);
                ApiHandler().getAllParkingSpacesFromZone('Zona Verde').then((value) {
                  setState(() {
                    all_polygons = polygonsFromParking(value);
                    all_polygons = {};
                  });
                });
              },
            ),
            ListTile(
              leading: Icon(Icons.local_parking),
              title: Text('Parcări TIMPARK Verzi Progresive'),
              onTap: () {
                Navigator.pop(context);
                ApiHandler().getAllParkingSpacesFromZone('Zona Verde Progresiv').then((value) {
                  setState(() {
                    all_polygons = polygonsFromParking(value);
                    all_polygons = {};
                  });
                });
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
                compassEnabled: false,
                myLocationEnabled: true,
                myLocationButtonEnabled: true,
                polygons: all_polygons,
                polylines: all_polylines,
                zoomControlsEnabled: false,
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
      floatingActionButton: FloatingActionButton(
          child: Icon(Icons.data_exploration),
          onPressed: () {
              showParkingStatusDialog(context);
          }
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
