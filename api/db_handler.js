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


module.exports = {

    addParkingSpace: async function(parkingSpace) {
        try {
            await client.connect();
            await client.db("server_data").collection("parking_spaces").insertOne(parkingSpace);
        } finally {
            await client.close();
        }
    }
}