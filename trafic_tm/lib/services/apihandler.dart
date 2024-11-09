import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

class ApiHandler {

  Set<Polygon> poligoane = {
    Polygon(
      polygonId: const PolygonId('id1'),
      points: const [
        LatLng(45.75372, 21.22571),
        LatLng(45.75375, 21.2258),
        LatLng(45.7538, 21.22579),
        LatLng(45.75372, 21.22583),
        LatLng(45.75379, 21.22581),
      ],
      strokeColor: Colors.green,
      strokeWidth: 1,
      fillColor: Colors.green.withOpacity(0.2),
      onTap: () {},
    ),
  };

  Set<Polygon> getPolygons() {
    return poligoane;
  }

}