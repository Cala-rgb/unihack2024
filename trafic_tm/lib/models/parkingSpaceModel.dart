class Parking {
  String name;
  Geometry geometry;
  String zone;
  double price;
  int freeSpaces;
  int totalSpaces;

  Parking({
    this.name = "unnamed",
    required this.geometry,
    this.zone = "None",
    this.price = 0.0,
    this.freeSpaces = 0,
    required this.totalSpaces,
  });

  // Factory constructor to create an instance from JSON
  factory Parking.fromJson(Map<String, dynamic> json) {
    return Parking(
      name: json['name'] ?? "unnamed",
      geometry: Geometry.fromJson(json['geometry']),
      zone: json['zone'] ?? "None",
      price: (json['price'] ?? 0).toDouble(),
      freeSpaces: json['free_spaces'] ?? 0,
      totalSpaces: json['total_spaces'],
    );
  }

  // Method to convert an instance to JSON
  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'geometry': geometry.toJson(),
      'zone': zone,
      'price': price,
      'free_spaces': freeSpaces,
      'total_spaces': totalSpaces,
    };
  }
}

class Geometry {
  String type;
  List<List<List<double>>> coordinates;

  Geometry({
    this.type = "Polygon",
    required this.coordinates,
  });

  // Factory constructor to create an instance from JSON
  factory Geometry.fromJson(Map<String, dynamic> json) {
    return Geometry(
      type: json['type'] ?? "Polygon",
      coordinates: (json['coordinates'] as List)
          .map((polygon) => (polygon as List)
          .map((ring) => List<double>.from(ring))
          .toList())
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
