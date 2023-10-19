const Product = require('../models/product');

const createProduct = async (req, res) => {

    try {
        const {name, description, price} = req.body;
        const product = await Product.create({name, description, price});
        res.status(201).json(product);
    } catch (error) {
        console.error(error);
        res.status(400).json({error: 'Product creation failed'});
    }

}

module.exports = {createProduct};

