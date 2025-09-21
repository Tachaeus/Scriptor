require('dotenv').config()

const PORT = process.env.PORT || 5500;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Tachaeus:Scriptor1@cluster0.0lmovcn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

module.exports = {
    PORT,
    MONGO_URI
}