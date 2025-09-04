require('dotenv').config();
const { MongoClient } = require('mongodb');

// The connection string
const uri = process.env.URI;

let db;

// The main function to run the MongoDB commands
async function run(callback) {
    try {

        if (db) {
            return callback(null, db);
        }

        MongoClient.connect(uri).then((client) => {
            //console.log("Connected to MongoDB: " + client.db().databaseName);
            db = client.db();
            callback(null, db);
        }).catch((error) => {
            console.error("Error connecting to MongoDB:", error);
            callback(error);
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

// Get the database connection to work with it
function getDb() {
    if (!db) {
        throw Error("Database not initialized");
    }

    //console.log(db);
    return db;
}

module.exports = { run, getDb };