import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:trafic_tm/services/apihandler.dart';
import 'package:trafic_tm/shared/customtext.dart';
import 'package:geolocator/geolocator.dart';
import 'package:trafic_tm/services/raspihandler.dart';
import 'package:url_launcher/url_launcher.dart';

import '../models/parkingSpaceModel.dart';

class Dashcam extends StatefulWidget {
  const Dashcam({super.key});

  @override
  State<Dashcam> createState() => _DashcamState();
}

class _DashcamState extends State<Dashcam> {
  final RaspiHandler raspiHandler = RaspiHandler();
  Map<String, dynamic>? recordingData;
  Map<String, dynamic>? frameData;

  Future<void> _startRecording() async {
    final data = await RaspiHandler().startRecording();
    setState(() {
      recordingData = data;
    });
  }

  Future<void> _stoptRecording() async {
    final data = await RaspiHandler().stopRecording();
    setState(() {
      recordingData = null;
    });
  }

  Future<void> _startFrame() async {
    final data = await RaspiHandler().startFrame();
    setState(() {
      frameData = data;
    });
  }

  Future<void> _stopFrame() async {
    final data = await RaspiHandler().stopFrame();
    setState(() {
      frameData = null;
    });
  }

  Future<void> _launchURL(String id) async {
    final url = Uri.parse('http://192.168.198.209:5000/download/$id');
    if (await canLaunchUrl(url)) {
      await launchUrl(url, mode: LaunchMode.externalApplication);
    } else {
      throw 'Could not launch $url';
    }
  }

  Future<void> _downloadLatest() async {
    final url = Uri.parse('http://192.168.198.209:5000/download-latest-frame');
    if (await canLaunchUrl(url)) {
      await launchUrl(url, mode: LaunchMode.externalApplication);
    } else {
      throw 'Could not launch $url';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Dashcam',style: CustomTextStyle.customText,),
        centerTitle: true,
        backgroundColor: Colors.teal[800],
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // const SizedBox(height: 20),
          recordingData != null ? Text("Status: ${recordingData!['status']}") : const Text("Status: not recording"),
          ElevatedButton(
            onPressed: _startRecording,
            child: const Text("Start Recording"),
          ),
          ElevatedButton(
            onPressed: _stoptRecording,
            child: const Text("Stop Recording"),
          ),
          const SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                onPressed: () {_launchURL("1");},
                style: ElevatedButton.styleFrom(
                  minimumSize: Size(50, 40), // Set width to 150 and height to 50
                ),
                child: const Text("Download 1"),
              ),
              const SizedBox(width: 10),
              ElevatedButton(
                onPressed: () {_launchURL("2");},
                style: ElevatedButton.styleFrom(
                  minimumSize: Size(50, 40), // Set width to 150 and height to 50
                ),
                child: const Text("Download 2"),
              ),
            ],
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ElevatedButton(
                onPressed: () {_launchURL("3");},
                style: ElevatedButton.styleFrom(
                  minimumSize: Size(50, 40), // Set width to 150 and height to 50
                ),
                child: const Text("Download 3"),
              ),
              const SizedBox(width: 10),
              ElevatedButton(
                onPressed: () {_launchURL("4");},
                style: ElevatedButton.styleFrom(
                  minimumSize: Size(50, 40), // Set width to 150 and height to 50
                ),
                child: const Text("Download 4"),
              ),
            ],
          ),
          const SizedBox(height: 20),
          const Divider(
            height: 1, // The height of the divider
            color: Colors.grey, // The color of the divider
            thickness: 1, // The thickness of the divider line
            indent: 20, // The left padding (indent) of the divider
            endIndent: 20, // The right padding (endIndent) of the divider
          ),
          const SizedBox(height: 20),
          frameData != null ? Text("Status: ${frameData!['status']}") : const Text("Status: not saving frames"),
          ElevatedButton(
            onPressed: _startFrame,
            child: const Text("Start Saving Frames"),
          ),
          ElevatedButton(
            onPressed: _stopFrame,
            child: const Text("Stop Saving Frames"),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: _downloadLatest,
            child: const Text("Download Most Recent Frame and Reset"),
          ),
        ],
      ),
    );
  }
}
