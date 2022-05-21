const express = require("express");
const User = require("../models/User");  //this User is imported from the User modals to store the details of the user
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET="chinnu"
// Create a User using: POST "/api/auth/createuser". No login required
router.post("/createuser",[
    body("name", "Please enter your name").isLength({ min: 3 }),
    body("email", "Please Enter a valid Email").isEmail(),
    body(
      "password",
      "please enter the password greater than 5 characters"
    ).isLength({ min: 5 }),
  ],

  async (req, res) => {
    //if there is errors return bad request and the error
    //took this from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check does the user with this email already exists!
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry a user with this email already exists" });
      }

      var salt = await bcrypt.genSalt(10); //it is used to convert your password into hash inorder to protect the user databases.
      var hash = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
      });

      //errors always won't be based on unique email so we have update our code ..
      // .then(user => res.json(user))
      // .catch(err=>{console.log(err)
      // res.json({Error:'This email is already been used, Try different Email!',message:err.message })}
      //)

      const data={
        user:{
          id:user.id
        }
      }

      const authtoken=jwt.sign(data,JWT_SECRET)  //this is used to provide the token based on your credentials like username and when you try to login itwill try to sync with the details stored in db and then grants us to use the app. for more details check jwt.io

      // res.json(user);
      res.json({authtoken});
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


// Create a User using: POST "/api/auth/login". No login required
router.post("/login",[
    body("email", "Please Enter a valid Email").isEmail(),
    body("password","please enter the password greater than 5 characters").exists(),
    ],
  async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const {email,password}=req.body
  try {
    let user=await User.findOne({email});
    if(!user){
      return res.status(400).json({error:"Please try to login with correct credentials"});
    }
    const passcompare=await bcrypt.compare(password,user.password)
    if(!passcompare){
      return res.status(400).json({error:"Please try to login with correct credentials"});
    }
    const data={
      user:{
        id:user.id
      }
    }

    const authtoken=jwt.sign(data,JWT_SECRET)
    res.json({authtoken});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
  }
);

module.exports = router;
