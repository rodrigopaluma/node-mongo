const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/node-mongo";
const client = new MongoClient(uri);

async function run() {
    try {

        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('node-mongo');

    } catch(err) {
        console.log(err);
    }
}

run();

module.exports = client;