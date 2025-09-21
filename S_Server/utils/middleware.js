const logger = require('./logger');

const requestLogger = (req, res, next) => {
    logger.info('Method: ', req.method)
    logger.info('Path: ', req.path)
    logger.info('Body: ', req.body)
    logger.info('...')
    next()
}

const tokenExtractor = (req, res, next) => {
    const authorization = req.get('authorization');
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        req.token = authorization.substring(7);
    } else {
        req.token = null;
    }

    next();
}

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'Endpoint Unknown!' });
}

const errorHandler = (error, req, res, next) => {
    logger.error(error.message);

    if (error.name === 'CastError') {
        return res.status(400).send('Malformed ID');
    }
    if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message });
    }
    if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({ error: 'Invalid token' });
    }
    if (error.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expired' });
    }

    next(error)
}

module.exports = {
    requestLogger,
    tokenExtractor,
    unknownEndpoint,
    errorHandler,
}