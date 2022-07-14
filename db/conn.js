const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://localhost:27017/node-mongo');
    
    console.log('Connected to MongoDB with Mongoose');
}

main().catch(err => console.error(err));

module.exports = mongoose;