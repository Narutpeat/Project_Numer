let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:String },
    a : {type: Number },
    b : {type: Number },
    create_date:{type:Date , default:Date.now}
});

let Trapezoidal = mongoose.model('Trapezoidal',Schema);
module.exports = Trapezoidal;