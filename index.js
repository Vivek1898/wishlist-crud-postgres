const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const morgan = require('morgan');

//models
const User = require('./models/user');
const Product = require('./models/product');
const Wishlist = require('./models/wishlist');

// Routes
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const wishlistRoutes = require('./routes/wishlist');

app.use(express.json());
app.use(cors( {origin:'*'}));
app.use(morgan('dev'));



(async () => {
    await User.sync();
    await Product.sync();
    await Wishlist.sync();
    console.log('Models synchronized with the database');
})();



app.use( '/api' , userRoutes);
app.use('/api' , productRoutes);
app.use('/api' , wishlistRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});