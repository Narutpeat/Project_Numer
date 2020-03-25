let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    X : {type:String },
    FX : {type:String },
    XN : {type:Number },
    create_date:{type:Date , default:Date.now}
});

let Newtondivided = mongoose.model('Newtondivided',Schema);
module.exports = Newtondivided;