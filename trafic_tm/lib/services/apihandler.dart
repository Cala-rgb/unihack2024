import 'dart:convert';
import 'dart:ffi';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:trafic_tm/models/parkingSpaceModel.dart';
import 'package:trafic_tm/models/userReportModel.dart';
import 'package:trafic_tm/models/biketrackModel.dart';
import 'package:http/http.dart' as http;

class ApiHandler {
  static final ApiHandler _singleton = ApiHandler._internal();
  static final String url = "http://192.168.100.113:3000";

  factory ApiHandler() {
    return _singleton;
  }

  Future<List<Parking>> getParkingSpaces(double lon, double lat, double radius) async {
    List<Parking> parkingSpaces = [];
    var response = await http.get(Uri.parse(url + "/api/parkingSpaces?longitude=" + lon.toString() + "&latitude=" + lat.toString() + "&radius=" + radius.toString()));
    Iterable l = json.decode(response.body);
    parkingSpaces = List<Parking>.from(l.map((model)=> Parking.fromJson(model)));
    return parkingSpaces;
  }

  Future<List<Parking>> getAllParkingSpace() async {
    List<Parking> parkingSpaces = [];
    var response = await http.get(Uri.parse(url + "/api/parkingSpacesAll"));
    print(response.body);
    Iterable l = json.decode(response.body);
    parkingSpaces = List<Parking>.from(l.map((model)=> Parking.fromJson(model)));
    return parkingSpaces;
  }

  ApiHandler._internal();
}