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

async function analyzeUserReport(userReport) {
  try {
    await client.connect();
    const result = getParkingSpaces(userReport.longitude, userReport.latitude, 0.001);
    if(result.length === 0) {
      return;
    }
    const parkingSpace = result[0];
    await client.db("server_data").collection("parking_spaces").updateOne(
      { _id: ObjectId(parkingSpace._id) },
      { $set: { free_spaces: userReport.free_spaces } }
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