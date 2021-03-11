const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required: "L'email est requis",
        unique: true
    },
    lastname: {
        type: String
        // required: "Le nom est requis"
    },
    password: {
        type: String,
        required: "Le mot de passe est requis."
    },
    role: {
        type: String
        // required: "Le rôle est requis"
    },
    school_id: {
        type: String
    },
    registered: {
        type: Boolean
    }
});

module.exports = mongoose.model('User', userSchema);