var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken')

var User = require('../models/users');

router.post('/',function(req, res, next){
    
    // console.log('Hey CAme to post request!!');
    var MechanicaID = req.body.mechanicaid;
    var Email = req.body.email;
    var Password = bcrypt.hashSync(req.body.password,10);
    var Name = req.body.name;
    var Rollno = req.body.rollno;
    var College = req.body.college;
    var RegisteredIDs = req.body.id;
    var Accomodation = req.body.accomodation;
    var AttendingMechanica = req.body.attendingmechanica;
    var Publicity = req.body.publicity;

    var user = new User({
        MechanicaID: MechanicaID,
        Email: Email,
        Password: Password,
        Name: Name,
        Rollno : Rollno,
        College: College,
        RegisteredIDs: RegisteredIDs,
        AttendingMechanica: AttendingMechanica,
        Accomodation: Accomodation,
        Publicity : Publicity
    });

    user.save(function(err, result) {
        if (err){
           return res.status(500).json({
                title: 'An Error Occured!!',
                error: err
            });
        }
        res.status(201).json({
            title: 'User Saved!!',
            obj: result
        });
    });
});

router.post('/login',function(req, res, next){
    User.findOne({Email: req.body.email},function(err,user){
        if(err){
            return res.status(500).json({
                title: 'An error Occured',
                error: err
            });
        }
        if(!user){
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid Login Credentials'}
            });
        }
        if(!bcrypt.compareSync(req.body.password, user.Password)){
            return res.status(401).json({
                title: 'Login Failed',
                error: {message: 'Invalid Login Credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'Champu Love ChoMo', {expiresIn: 7200});
        res.status(200).json({
            message: 'Successfully Logged In',
            token: token,
            userID: user._id,
            MechanicaID: user.MechanicaID,
            Name: user.Name,
            Email: user.Email,
            College: user.College
        });
    });
});

router.use('/register', function(req, res, next){
    jwt.verify(req.query.token, 'Champu Love ChoMo', function(err, decoded){
        if (err){
            return res.status(401).json({
                title: 'Not Authenticated',
                error: err
            });
        }
        next();
    });
});

router.post('/register', function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, function(err, user){
        if (err){
            return res.status('500').json({
                title: 'An error Occured!!',
                error: err
            });
        }
        var RegisterID = req.body.registerid;
        user.RegisteredIDs.push(RegisterID);
        user.save(function(err, result) {
            if (err){
            return res.status(500).json({
                    title: 'An Error Occured!!',
                    error: err
                });
            }
            res.status(201).json({
                title: 'User Saved!!',
                obj: result
            });
        });
    });
});

router.get('/registereduser', function(req, res, next){
    var decoded = jwt.decode(req.query.token);
    if(decoded.user.Email == 'admin@admin.com'){
        User.find({}, function(err, users){
            if (err){
               return res.status(500).json({
                title: 'An error Occured!!',
                error: err
                }); 
            }
            res.status(201).json({
                users: users
            });
        });
    }
    // res.status(500).json({
    //     title: 'An error Occured',
    //     error: 'Not Admin'
    // });
});

module.exports = router;