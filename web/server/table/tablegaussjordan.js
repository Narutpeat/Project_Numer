let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:Array },
    create_date:{type:Date , default:Date.now}
});

let GaussJordan = mongoose.model('GaussJordan',Schema);
module.exports = GaussJordan;