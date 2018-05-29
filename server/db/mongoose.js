var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//this is for production environment MONGODB_URI is only on heroku
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};