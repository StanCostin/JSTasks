const router = require('express').Router();
const User = require('../models/user_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/user/register', async (req, res) => {

    const usernameExist = await User.findOne({username: req.body.username});
    const emailExist = await User.findOne({email: req.body.email});

    if(usernameExist) return res.status(400).send('Username already exist');
    if(emailExist) return res.status(400).send('Email already exist');

    const salt = await bcrypt.genSalt(10);
    const hashedPwd = await bcrypt.hash(req.body.password, salt); 

    const user = new User(
        {
            username: req.body.username,
            email: req.body.email,
            password: hashedPwd
        }
    );

    try {
        const saveUsr = await user.save();
        res.send(saveUsr);
    } catch (err) {
        res.status(404).send(err);
    }

});

router.post('/login/user', async (req, res) => {

    const user = await User.findOne({username: req.body.username});

    if(req.body.email) return res.status(400).send('Email not required');

    if(!user) return res.status(400).send('Invalid username!');

    const validPwd = await bcrypt.compare(req.body.password, user.password);
    if(!validPwd) return res.status(400).send('Invalid password!');

    const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN, {expiresIn: '1h'});
    res.header('auth-token', token).send(token);

})

module.exports = router