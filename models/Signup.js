const mongoose = require('mongoose');

//name,userid,email,password

const SignupSchema = new mongoose.Schema({name:String,userid:String,emailID:String,password:String})
//     name: {
//         type:String,
//         required:[true, 'must provide name'],
//         trim:true,
//         maxlength:[30,'name cannot be equal to 20'],
//     },userid:{
//         type:String,
//         required:[true, 'must provide name'],
//         trim:true,
//         maxlength:[30,'name cannot be equal to 20'],
//     },emailID:{
//         type:String,
//         required:[true, 'must provide name'],
//         trim:true,
//     },password:{
//         type:String,
//         required:[true, 'must provide name'],
//         maxlength:[10,'name cannot be equal to 10'],
//         trim:true,
//     }
// })

module.exports = mongoose.model('Signup', SignupSchema)