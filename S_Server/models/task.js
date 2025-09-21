const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    TName: {
        type: String,
        important: Boolean,
    },
    due: {
        type: String,
        important: Boolean,
    },
    description: {
        type: String,
        important: Boolean,
        required: false,
        default: 'No description',
    },
})

taskSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject = returnedObject._id.toString()
        delete returnedObject._id;
        delete returnedObject.__v;
    }
})

module.exports = mongoose.model('Task', taskSchema);