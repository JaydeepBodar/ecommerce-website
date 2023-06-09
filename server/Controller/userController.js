const Signupschema = require("../Model/userSignupschema");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const secreatkey = process.env.secretkey;
const jsonwebtoken = require("jsonwebtoken");
const signup = async (req, res) => {
  const { firstname, lastname , email, password } = req.body;
  console.log({ email });
  try {
    // existing user check
    const existinguser = await Signupschema.findOne({ email: email });
    if (existinguser) {
      res.status(409).json({ message: "user alreday exists" });
    }
    // hash password creation
    const hashpassword = await bcrypt.hash(password, 10);
    // newuser
    const result = await Signupschema.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashpassword,
    });
    console.log(result);
    // jwt token
    const jsontoken = jsonwebtoken.sign(
      { email: result.email, id: result._id },
      secreatkey
    );
    console.log('token',jsontoken)
    res.json({ user: result, token: jsontoken });
    console.log(result);
  } catch (error) {
    // res.status(500).send({ message: "something went to wrong" });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // if (!(email && password)) {
    //   res.status(401).json().send({ message: "invalid userlogin" });
    // } else {
    const user = await Signupschema.findOne({ email: email });
    console.log(user);
    if (user) {
      const ispassword = await bcrypt.compare(password, user.password);
      if (!ispassword) {
        res.status(405).json({ message: "worng password try again" });
      }
      if (user && ispassword) {
        const token = jsonwebtoken.sign(
          { id: user._id, email: user.email },
          secreatkey,
          { expiresIn: "2h" }
        );
        user.token = token;
        console.log('logintoken',token)
        console.log("efefeff", user);
        res.json({user,message:'user login succsessfully'})
      }
    } else {
      res.status(401).json({ message: "Invalid login details" });
    }

    // }
  } catch (err) {
    // res.status(401).json({ message: "invalid userlogin" });
  }
};
module.exports = { signup, login };
