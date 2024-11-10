import 'dart:convert';
import 'dart:ffi';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:trafic_tm/models/parkingSpaceModel.dart';
import 'package:trafic_tm/models/userReportModel.dart';
import 'package:trafic_tm/models/biketrackModel.dart';
import 'package:http/http.dart' as http;

class RaspiHandler {
  static final RaspiHandler _singleton = RaspiHandler._internal();
  static final String url = "http://192.168.198.209:5000";

  Future<Map<String, dynamic>?> startRecording() async {
    try {
      final response = await http.get(Uri.parse(url + "/start"));
      if (response.statusCode == 200) {
        return jsonDecode(response.body) as Map<String, dynamic>;
      } else {
        print("Failed to load data: ${response.statusCode}");
        return null;
      }
    } catch (e) {
      print("Error occurred: $e");
      return null;
    }
  }

  Future<Map<String, dynamic>?> stopRecording() async {
    try {
      final response = await http.get(Uri.parse(url + "/stop"));
      if (response.statusCode == 200) {
        return jsonDecode(response.body) as Map<String, dynamic>;
      } else {
        print("Failed to load data: ${response.statusCode}");
        return null;
      }
    } catch (e) {
      print("Error occurred: $e");
      return null;
    }
  }

  Future<Map<String, dynamic>?> startFrame() async {
    try {
      final response = await http.get(Uri.parse(url + "/save-frames/start"));
      if (response.statusCode == 200) {
        return jsonDecode(response.body) as Map<String, dynamic>;
      } else {
        print("Failed to load data: ${response.statusCode}");
        return null;
      }
    } catch (e) {
      print("Error occurred: $e");
      return null;
    }
  }

  Future<Map<String, dynamic>?> stopFrame() async {
    try {
      final response = await http.get(Uri.parse(url + "/save-frames/stop"));
      if (response.statusCode == 200) {
        return jsonDecode(response.body) as Map<String, dynamic>;
      } else {
        print("Failed to load data: ${response.statusCode}");
        return null;
      }
    } catch (e) {
      print("Error occurred: $e");
      return null;
    }
  }



  factory RaspiHandler() {
    return _singleton;
  }

  RaspiHandler._internal();
}