let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    X : {type:String },
    FX : {type:String },
    M : {type:Number },
    XN : {type:Number },
    create_date:{type:Date , default:Date.now}
});

let Polynomial = mongoose.model('Polynomial',Schema);
module.exports = Polynomial;