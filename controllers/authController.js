const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { email, name, password, repassword, phoneno } = req.body;

    if (!email || !name || !password || !phoneno || !repassword) {
      return res.status(400).json({
        status: false,
        message: "Required Input Missing",
      });
    }

    // if exist
    const existingPhone = await User.findOne({ phoneno });
    const existingemail = await User.findOne({ email });

    // existing phone no check
    if (existingPhone) {
      return res.status(400).json({
        success: false,
        message: "Phone No already exist",
      });
    }

    // existing email check
    if (existingemail) {
      return res.status(400).json({
        success: false,
        message: "Email ID already exist",
      });
    }

    if (password !== repassword) {
      return res.status(400).json({
        success: false,
        message: "Password does not match",
      });
    }

    // Hashed Password
    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Error in hashing password",
      });
    }

    // create entry for user
    const user = await User.create({
      name,
      email,
      phoneno,
      password: hashedPassword,
      role: "user",
    });

    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "User cannot be registered, Please try again later",
    });
  }
};

exports.login = async (req, res) => {
  try {
    // data fetch
    const { emailorphone, password } = req.body;

    // validation on email and password
    if ((!emailorphone ||  !password)) {
      return res.status(400).json({
        success: false,
        message: "Required Input Missing",
      });
    }

    // check for email or phone no
    const user = await User.findOne({
      $or: [{ email: emailorphone }, { phoneno: emailorphone }],
    });

    // not registered user
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User is not Registered",
      });
    }

    const payload = {
      email: user.email,
      phoneno: user.phoneno,
      id: user._id,
      role: user.role,
    };

    // verify password and generate JWT token
    if (await bcrypt.compare(password, user.password)) {
      // password match
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user = user.toObject();
      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User Login Successfully",
      });
    } else {
      // password don not match
      return res.status(403).json({
        success: false,
        message: "Password incorrect",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Login Failed",
    });
  }
};
