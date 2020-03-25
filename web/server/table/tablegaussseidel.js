let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:Array },
    create_date:{type:Date , default:Date.now}
});

let GaussSeidel = mongoose.model('GaussSeidel',Schema);
module.exports = GaussSeidel;