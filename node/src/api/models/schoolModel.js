const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schoolSchema = new Schema({
    school_name: {
        type: String,
        required: "the school name is required ",
        unique: true
    },
    location: {
        type: String,
        required: "the location is required "
    },
    project_title: {
        type: String
    },
    project_description: {
        type: String
    },
    nombre_participant: {
        type: Number
    },
    admin_id: {
        type: String
    },
    users_id: {
        type: Array,
        default : []
    }
});

module.exports = mongoose.model('School', schoolSchema);