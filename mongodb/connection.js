require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

// The connection string
const uri = process.env.URI;

// Create a new MongoClient
const client = new MongoClient(uri, {
    // Set the Server API version
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}); 

let db;

// The main function to run the MongoDB commands
async function run(callback) {
    try {
        await client.connect();
        db = client.db("cse341assigments");

        await client.db("admin").command({ ping: 1 });

        console.log("Connection made.");

        return callback(null);

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

// Get the database connection to work with it
function getDb() {
    console.log(db);
    return db;
}

module.exports = { run, getDb };