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
  //static final String url = "http://192.168.198.60:3000";
  static final String url = "http://192.168.100.75:3000";

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

  Future<List<Parking>> getAllParkingSpacesFromZone(String zone) async {
    List<Parking> parkingSpaces = [];
    var response = await http.get(Uri.parse(url + "/api/parkingSpacesAll"));
    print(response.body);
    Iterable l = json.decode(response.body);
    parkingSpaces = List<Parking>.from(l.map((model)=> Parking.fromJson(model)));
    List<Parking> newlist = [];
    for(Parking parkingspace in parkingSpaces){
      if(parkingspace.zone == zone){
        newlist.add(parkingspace);
      }
    }
    return newlist;
  }

  Future<List<BikeTrack>> getAllBikeTracks() async {
    List<BikeTrack> bikeTracks = [];
    var response = await http.get(Uri.parse(url + "/api/bikeTracks"));
    print(response.body);
    Iterable l = json.decode(response.body);
    print('testest');
    //print(l);
    bikeTracks = List<BikeTrack>.from(l.map((model)=> BikeTrack.fromJson(model)));
    return bikeTracks;
  }

  Future<void> postUserReport(double lon, double lat, int free_space, String user_id) async {
    var response = await http.post(Uri.parse(url + "/api/userReport?longitude=" + lon.toString() + "&latitude=" + lat.toString() + "&free_space=" + free_space.toString() + "&user_id=" + user_id));
    print(response.body);
  }

  ApiHandler._internal();
}