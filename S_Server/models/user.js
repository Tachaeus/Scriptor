const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        important: Boolean,
    },
    password: {
        type: String,
        important: Boolean,
    },
    rememberMe: {
        type: Boolean,
        important: Boolean,
        required: false,
        default: false,
    },
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject = returnedObject._id.toString()
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model('User', userSchema);