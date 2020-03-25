let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:String },
    x : {type: Number },
    create_date:{type:Date , default:Date.now}
});

let Newton = mongoose.model('Newton',Schema);
module.exports = Newton;