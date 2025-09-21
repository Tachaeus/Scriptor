const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = '0987654321';

usersRouter.post('/register', async (req, res) => {
    try {
        const { username, password, rememberMe } = req.body;
        if (!username || !password) {
            return res.status(400).send('These fields are required!');
        }

        const pHashed = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            password: pHashed,
            rememberMe,
        });
        await user.save();
        return res.status(201).json({ message: 'User created successfully!' });
    } catch (err) {
        return res.status(500).json({ error: 'An error occured' + err.message });
    }
});

usersRouter.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'This user does not exist!' });
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }

        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '12hr' });
        res.json({ token });
    } catch (err) {
        return res.status(500).json({ error: 'Login failure: ' + err.message });
    }
});

usersRouter.get('/dashboard', async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'Access denied. No token provided.' });

    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token!' });
        res.send(`Welcome to your dashboard, ${user.username}!`);
    });
});

// Admin Only

usersRouter.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        return res.status(200).json(users);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});

module.exports = usersRouter;
