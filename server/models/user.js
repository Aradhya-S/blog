const mongoose = require('mongoose');

const Schema = mongoose.Schema; // Corrected from 'schema' to 'Schema'

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    }
    
});

module.exports = mongoose.model('User', UserSchema);