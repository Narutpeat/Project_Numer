let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:Array },
    create_date:{type:Date , default:Date.now}
});

let Jacobi = mongoose.model('Jacobi',Schema);
module.exports = Jacobi;