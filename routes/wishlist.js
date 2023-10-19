const express = require('express');

const router = express.Router();


const {createWishList, getWishList} = require('../controllers/wishlist');

router.post('/wishlist', createWishList);
router.get('/wishlist/:userId', getWishList);

module.exports = router;