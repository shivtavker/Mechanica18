var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require('mongoose-unique-validator');

var schema = new Schema({
    MechanicaID : {type:String, required: true, unique:true},
    Email : {type:String, required: true, unique:true},
    Password : {type:String, required: true},
    Name : {type:String, required: true},
    Rollno : {type:String, required: true},
    College : {type:String, required: true},
    RegisteredIDs: [{type: Number}],
    AttendingMechanica : {type:String},
    Accomodation: {type: Boolean},
    Publicity: {type: String}
});

schema.plugin(mongooseUniqueValidator)

module.exports = mongoose.model('user', schema);