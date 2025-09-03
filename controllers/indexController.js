const userData = require("../models/getDataUser.js");

const controller = {};

controller.displayUserData = async (req, res) => {
    try {

        console.log("Fetching user data...");

        const data = await userData.getData();
        res.setHeader("Content-Type", "application/json");
        res.json(data[0]);
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = controller;