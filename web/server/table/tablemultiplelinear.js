let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    X : {type:Array },
    FX : {type:String },
    XN : {type:String },
    create_date:{type:Date , default:Date.now}
});

let Multiplelinear = mongoose.model('Multiplelinear',Schema);
module.exports = Multiplelinear;