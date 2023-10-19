const User = require('../models/user');
const createUser = async (req, res) => {

    try {
        const {name, email} = req.body;
        const user = await User.create({name, email});
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(400).json({error: 'User creation failed'});
    }

}

module.exports = {createUser};

