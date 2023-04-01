const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
// dotenv.config();
mongoose.set("strictQuery", false);
const defaultproduct = require("./defaultproduct");
const productsdata = require("./Routes/productroute");
const userloginroutes = require("./Routes/userRoutes");
app.use(express.json());
app.use(cors("*"));
app.use("/user", userloginroutes);
app.use("/data", productsdata);

app.listen(5000, function check(err) {
  if (err) {
    console.log("error");
  } else {
    console.log("started your server on port 5000");
  }
});
console.log(process.env.DATABASE)
mongoose.connect(process.env.DATABASE,
  { useNewUrlParser: true, useUnifiedTopology: true },function check(err){
    if(err){
      console.log('database not connected',err)
    }
    else{
      console.log('database connected successfully')
    }
  }
  );
  defaultproduct()
