const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ers_development');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in connecting with database'));
db.once('open', function(){
    console.log('Connected with databse: mongodb');
});

module.exports = db;