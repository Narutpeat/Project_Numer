let mongoose = require('mongoose');

//Schema Validation

let Schema = mongoose.Schema({
    equation : {type:String },
    a : {type: Number },
    b : {type: Number },
    create_date:{type:Date , default:Date.now}
});

let Simpson = mongoose.model('Simpson',Schema);
module.exports = Simpson;