const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
    await mongoose.connect(MONGO_URL);
}
main().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});

const initDB= async () =>{
    await Listing.deleteMany({});
    initData.data =initData.data.map((obj) => ({ ...obj, owner: "69ab04588a92ef42ccdaf720"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();