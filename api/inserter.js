// Imports - NOTICE THE DIFFERENCE - These are ESM imports
import { MongoClient } from "mongodb"; // Mongodb package
import express from "express"; // ExpressJS for our server application
import fs from "fs"; // File system

// Setup variables
const uri = "mongodb+srv://pinteavladc:TG;u+pbT=>ap3Qe@clustermain.gy4wb.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMain"; // URI to mongodb server

const client = new MongoClient(uri); // Create client - Think of it as a live connection
await client.connect(); // Connect client to server
const database = client.db("server_data"); // Access the database on server
let collection = database.collection("bike_tracks"); // Initial value of sounds collection

const filePath = "C:/Users/Deea/Desktop/unihack/unihack2024/api/data/piste.json";
const fileContent = fs.readFileSync(filePath, "utf-8");
const jsonData = JSON.parse(fileContent);

await collection.insertMany(jsonData);

client.close();