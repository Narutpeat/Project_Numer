let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:String },
    x : {type: Number },
    h : {type: Number },
    d : {type: Number },
    create_date:{type:Date , default:Date.now}
});

let Forward2 = mongoose.model('Forward2',Schema);
module.exports = Forward2;