let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:String },
    x0 : {type: Number },
    x1 : {type: Number },
    create_date:{type:Date , default:Date.now}
});

let Secant = mongoose.model('Secant',Schema);
module.exports = Secant;