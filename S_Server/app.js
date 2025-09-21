const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./controllers/users');
const tasksRouter = require('./controllers/tasks');
const config = require('./utils/config');
const logger = require('./utils/logger');
const middleware = require('./utils/middleware');

const app = express();

logger.info(`Connecting to: http://127.0.0.1:${config.PORT}`);

mongoose.connect(config.MONGO_URI)
.then(() => {
    logger.info('Server connection attained!');
})
.catch((error) => {
    logger.error('Server connection error', error.message);
})

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);

app.use('/', usersRouter);
app.use('/login', usersRouter);
app.use('/users', usersRouter);
app.use('/', tasksRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;