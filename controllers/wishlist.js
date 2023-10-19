const User = require('../models/user');
const Product = require('../models/product');
const Wishlist = require('../models/wishlist');
const createWishList = async (req, res) => {

    try {
        const {userId, productId} = req.body;
        const user = await User.findByPk(userId);
        const product = await Product.findByPk(productId);

        if (!user || !product) {
            return res.status(404).json({error: 'User or product not found'});
        }

        const wishlistItem = await Wishlist.create({userId, productId});
        res.status(201).json(wishlistItem);
    } catch (error) {
        console.error(error);
        res.status(400).json({error: 'Adding to wishlist failed'});
    }

}


const getWishList = async (req, res) => {
    const {userId} = req.params;

    try {
        // Find the wishlist items for the given userId
        const wishlistItems = await Wishlist.findAll({
            where: {userId},
        });

        if (!wishlistItems || wishlistItems.length === 0) {
            return res.status(404).json({error: 'User wishlist not found'});
        }

        const productIds = wishlistItems.map(item => item.productId);

        const products = await Product.findAll({
            where: {id: productIds},
        });

        if (!products || products.length === 0) {
            return res.status(404).json({error: 'Products not found'});
        }

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Fetching wishlist failed'});
    }
};


module.exports = {createWishList, getWishList};

