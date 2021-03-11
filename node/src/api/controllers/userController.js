const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const isemail = require('isemail');

//list all users
exports.list_all_users = (req, res) => {
    User.find({}, (error, users) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            })
        } else {
            res.status(200);
            res.json(users)
        }
    })
}

//get an user
exports.get_an_user = (req, res) =>  {
    User.findById(req.params.user_id, (error, user) => {
        if(error){
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."})
          }
          else{
              res.status(200);
              res.json(user)
          }
    })
}

// update an user
exports.update_a_user = async (req, res) => {
    if(req.body.password)   {
        const salt = await bcrypt.genSalt(10);
        let hashpassword = await bcrypt.hash(req.body.password, salt);
        req.body.password = hashpassword;
    }

    User.findByIdAndUpdate(req.params.user_id, req.body, {new: true}, (error, user) => {
        if(error)   {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."})
        }
        else{
            res.status(200);
            res.json(user)
            
        }
    })
}

//delete an user
exports.delete_a_user = (req, res) => {
    User.findByIdAndDelete(req.params.user_id, (error, user) => {
      if(error){
        res.status(500);
        console.log(error);
        res.json({message: "Erreur serveur."})
      }
      else{
        res.status(200);
        res.json({message: "User supprimé"});
      }
    })
  }
  

  //create an user
exports.create_an_user = async (req, res) => {
    if(isemail.validate(req.body.email)) {
        const salt = await bcrypt.genSalt(10);
        let hashpassword = await bcrypt.hash(req.body.password, salt);
    
        const user =  new User({
            email: req.body.email,
            lastname: req.body.lastname,
            password: hashpassword,
            role: req.body.role,
            school_id: req.body.school_id
        })
        user.save((error, user) => {
            if (error) {
                res.status(500);
                console.log(error);
                res.json({
                    message: "Erreur serveur."
                })
            } else {
                res.status(201);
                res.json(user)
            }
        })
    } else {
        res.json({
            message: "L'email n'est pas valide."
        })
    }
}


// login an user
exports.login_an_user =  async (req, res) => {
    User.findOne({email: req.body.email}, (error, user) => {
        if (error || !user) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Mot de passe ou email erroné.."
            })
        } else {
            if(bcrypt.compare(req.body.password, user.password)) {
                res.status(201);
                res.json(user);        
            } else {
                res.status(400);
                console.log(error);
                res.json({
                    message: "Mot de passe ou email erroné"
                })
            }
        }
    })
}

// validate an application
exports.validate_application = (req, res) => {
    User.findByIdAndUpdate(req.params.user_id, {registered: true}, {new: true}, (error, user) => {
        if(error)   {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."})
        }
        else{
            res.status(200);
            res.json(user)
            
        }
    })
}