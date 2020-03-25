let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:String },
    x : {type: Number },
    h : {type: Number },
    d : {type: Number },
    create_date:{type:Date , default:Date.now}
});

let Central2 = mongoose.model('Central2',Schema);
module.exports = Central2;