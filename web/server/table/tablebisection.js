let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:String },
    xl : {type: Number },
    xr : {type: Number },
    create_date:{type:Date , default:Date.now}
});

let Bisection = mongoose.model('Bisection',Schema);
module.exports = Bisection;