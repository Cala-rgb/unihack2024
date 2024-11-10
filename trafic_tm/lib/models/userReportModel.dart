class UserReport {
  String userId;
  double latitude;
  double longitude;
  int freeSpaces;

  UserReport({
    required this.userId,
    required this.latitude,
    required this.longitude,
    this.freeSpaces = 0,
  });

  // Factory constructor to create an instance from JSON
  factory UserReport.fromJson(Map<String, dynamic> json) {
    return UserReport(
      userId: json['user_id'],
      latitude: json['latitude'].toDouble(),
      longitude: json['longitude'].toDouble(),
      freeSpaces: json['free_spaces'] ?? 0,
    );
  }

  // Method to convert an instance to JSON
  Map<String, dynamic> toJson() {
    return {
      'user_id': userId,
      'latitude': latitude,
      'longitude': longitude,
      'free_spaces': freeSpaces,
    };
  }
}
