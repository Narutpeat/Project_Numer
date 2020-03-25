let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    X : {type:String },
    FX : {type:String },
    XN : {type:Number },
    create_date:{type:Date , default:Date.now}
});

let Linear = mongoose.model('Linear',Schema);
module.exports = Linear;