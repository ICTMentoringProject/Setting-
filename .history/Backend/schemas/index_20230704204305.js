const mongoose = require('mongoose');
const env = process.env.NODE_ENC || 'development';
const speak = require('./speak');
const feedback = require('./feedback');
const speakSchema = require('./speak');
const feedbackSchema = require('./feedback');

mongoose.connect(config.database, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreteIndex : true,
});



module.exports = {
    speak,
    feedback,
}




const db = {};

