const mongoose = require("mongoose");
const schema= mongoose.Schema
const userSignupschema =new schema({
  firstname:{
    require:true,
    type:String
  },
  lastname:{
    require:true,
    type:String
  },
  email: {
    require: true,
    type: String,
  },
  password: { type: String, require: true },
});
module.exports=mongoose.model('usersignups',userSignupschema)