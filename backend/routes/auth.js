const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// Create a User using: POST "/api/auth/". Doesn't require Auth
router.post(
  "/createuser",
  [
    body("name", "Please enter your name").isLength({ min: 3 }),
    body("email", "Please Enter a valid Email").isEmail(),
    body(
      "password",
      "please enter the password greater than 5 characters"
    ).isLength({ min: 5 }),
  ],

  async (req, res) => {
    //if there is errors return bad request and the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check does the user with this email already exists!
    try {
      let user = await User.findOne({ email: req.body.email });
      if (use3r) {
        return res
          .status(400)
          .json({ error: "sorry a user with this email already exists" });
      }

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        password: req.body.password,
      });
      // .then(user => res.json(user))
      // .catch(err=>{console.log(err)
      // res.json({Error:'This email is already been used, Try different Email!',message:err.message })})
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some unexpected Error Occured");
    }
  }
);

module.exports = router;
