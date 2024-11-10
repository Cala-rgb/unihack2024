class BikeTrack {
  String name;
  Geometry geometry;

  BikeTrack({
    this.name = "unnamed",
    required this.geometry,
  });

  // Factory constructor to create an instance from JSON
  factory BikeTrack.fromJson(Map<String, dynamic> json) {
    print('plm');
    print(json['geometry']['coordinates']);
    return BikeTrack(
      name: json['name'] ?? "unnamed",
      geometry: Geometry.fromJson(json['geometry']['coordinates']),
    );
  }

  // Method to convert an instance to JSON
  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'geometry': geometry.toJson(),
    };
  }
}

class Geometry {
  String type;
  List<List<double>> coordinates;

  Geometry({
    this.type = "LineString",
    required this.coordinates,
  });

  // Factory constructor to create an instance from JSON
  factory Geometry.fromJson(Map<String, dynamic> json) {
    print('${json['type'][0]}');
    return Geometry(
      coordinates: (json['type'][0] as List)
          .map((coord) => List<double>.from(coord))
          .toList(),
    );
  }

  // Method to convert an instance to JSON
  Map<String, dynamic> toJson() {
    return {
      'type': type,
      'coordinates': coordinates,
    };
  }
}
