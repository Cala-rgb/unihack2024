const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId; 
const dotenv = require('dotenv').config();
const parkingSchema = require('./models/parking');
const uri = process.env.MONGODB_URI;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function getParkingSpaces(longitude, latitude, radius) {
  //Teoretic ar trebui sa fie un cerc dar deocamdata facem un patrat
  const minLongitude = longitude - radius;
  const minLatitude = latitude - radius;
  try {
    await client.connect();
    const result = await client.db("server_data").collection("parking_spaces").find({
      "geometry": {
        $geoIntersects: {
          $geometry: {
             type: "Polygon" ,
             coordinates: [ [ [ minLongitude, minLatitude ], [ minLongitude, minLatitude + 2*radius ], [ minLongitude + 2*radius, minLatitude + 2*radius ], [ minLongitude + 2*radius, minLatitude ], [ minLongitude, minLatitude ] ] ],
          }
       }
      }
    }).toArray();
    return result;
  } finally {
    await client.close();
  }
}

async function getParkingSpacesByZone(zone) {
  try {
    await client.connect();
    const result = await client.db("server_data").collection("parking_spaces").find({
      "zone": zone}).toArray();
    return result;
  } finally {
    await client.close();
  }
}

async function getParkingSpacesAll() {
  try {
    await client.connect();
    const result = await client.db("server_data").collection("parking_spaces").find().toArray();
    return result;
  } finally {
    await client.close();
  }
}

async function analyzeUserReport(userReport) {
  userReport.latitude = parseFloat(userReport.latitude);
  userReport.longitude = parseFloat(userReport.longitude);
  userReport.free_spaces = parseInt(userReport.free_spaces);
  try {
    await client.connect();
    // Increment the number of reports for the parking space
    await client.db("server_data").collection("parking_spaces").updateOne(
      { "geometry": { $geoIntersects: { $geometry: { type: "Point", coordinates: [ userReport.longitude, userReport.latitude ] } } } },
      { $inc: { "free_spaces": userReport.free_spaces} }
    );

    
    
  }
  finally {
    await client.close();
  }
}

async function getAllBikeTracks(){
	try{
		await client.connect();
		const result = await client.db("server_data").collection("bike_tracks").find().toArray()
		return result
	} finally {
		await client.close();
	}
}

module.exports = {

    addParkingSpace: async function(parkingSpace) {
        try {
            await client.connect();
            await client.db("server_data").collection("parking_spaces").insertOne(parkingSpace);
        } finally {
            await client.close();
        }
    },

    getParkingSpaces,
    getParkingSpacesByZone,
    getParkingSpacesAll,

    sendUserReport: async function(userReport) {
      try {
        await client.connect();
        await client.db("server_data").collection("user_reports").insertOne(userReport);
      } finally {
        await client.close();
      }
      analyzeUserReport(userReport);
    },

	getAllBikeTracks,

}
