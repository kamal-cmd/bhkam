const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    phoneno: {
        type: Number
    },
    message: {
        type: String
    }
    
},
);
module.exports = mongoose.model('User', user); 