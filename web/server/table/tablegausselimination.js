let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:Array },
    create_date:{type:Date , default:Date.now}
});

let GaussElimination = mongoose.model('GaussElimination',Schema);
module.exports = GaussElimination;