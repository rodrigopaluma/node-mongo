const client = require('../db/conn');

const { ObjectId } = require('mongodb');

class Product {

    constructor(name, image, price, description) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.description = description;
    }

    save() {
        const product = client.db().collection('products').insertOne({
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description
        });

        return product;
    }

    static getProducts() {
        const products = client.db().collection('products').find().toArray();

        return products;
    }

    static async getProductById(id) {
        const product = await client.db().collection('products').findOne({ _id: ObjectId(id) });

        return product;
    }

    static async removeProductById(id) {
        await client.db().collection('products').deleteOne({ _id: ObjectId(id) });
        return
    }
}

module.exports = Product;