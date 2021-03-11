const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let appSchema = new Schema({
    user_id: {
        type: String,
        required: "L'id user est requis"
    },
    user_name: {
        type: String,
        required: "L'id user est requis"
    },
    school_id: {
        type: String,
        required: "L'id school est requis"
    },
    experience: {
        type: String,
        required: "Le cv est requis."
    },
    motivation: {
        type: String,
        required: "La lettre de motivation est requise."
    }
});

module.exports = mongoose.model('App', appSchema);