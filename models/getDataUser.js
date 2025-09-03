const mongodb = require("../mongodb/connection.js");

async function getData() {
    try {

        console.log("Getting user data from the database...");

        const db = await mongodb.getDb();
        const users = await db.collection('users').find({}).toArray();
        console.log(users);
        return users;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Internal Server Error");
    }
}

module.exports = { getData };