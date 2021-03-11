const School = require('../models/schoolModel');

//list all schools
exports.list_all_schools = (req, res) => {
    School.find({}, (error, schools) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json(schools)
        }
    })
}



//create a school
exports.create_a_school= (req, res) => {
    let new_school = new School(req.body);

    new_school.save((error, school) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(201);
            res.json(school)
        }
    })
}

//get a school by id 
exports.get_a_school = (req, res) => {
    School.findById(req.params.school_id, (error, school) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json(school)
        }
    })
}

//get a school by name
exports.get_a_school_by_name = (req, res) =>   {
    School.find({school_name: req.params.school_name}, (error, school) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json(school)
        }
    })
}

// update a school
exports.update_a_school= (req, res) => {
    School.findByIdAndUpdate(req.params.school_id, req.body, {
        new: true
    }, (error, school) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json(school)
        }
    })
}

//add user to project
exports.add_user_to_project= (req, res) => {
    School.findById(req.params.school_id, (error, school) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            school.users_id.push(req.params.user_id);
            school.save();
            res.status(200);
            res.json(school)
        }
    })
}

//delete a school
exports.delete_a_school = (req, res) => {
    School.findByIdAndRemove(req.params.school_id, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json({
                message: "School deleted!"
            })
        }
    })
}