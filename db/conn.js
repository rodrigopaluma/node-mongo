const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017/node-mongo";
const client = new MongoClient(uri);

async function run() {
    try {

        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db('node-mongo');
        const collection = db.collection('toughts');

        const result = await collection.insertOne({
            title: 'Tought 1',
            body: 'Body 1'
        });

        console.log(result.insertedId);


    } catch(err) {
        console.log(err);
    }
}

run();

module.exports = client;