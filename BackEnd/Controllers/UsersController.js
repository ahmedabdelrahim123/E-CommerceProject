const validate = require("../Utils/userSchema");
const usersModel = require("../Model/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

let getAllUsers = async (req, res) => {
  let data = await usersModel.find({});
  res.json(data);
};

let addNewUser = async (req, res) => {
  email = req.body.email;
  password = req.body.password;
  gender = req.body.gender;
  type = req.body.type;
  username = req.body.username;
  orders = JSON.parse(req.body.orders);
  image = req.file.filename;
  let data = req.body;
  console.log(data);
  console.log(image);
  const valid = true;
  if (!valid) {
    return res.status(400).send("invalid data" + error.details[0].message);
  } else {
    let testingUserByEmail = await usersModel.findOne({
      email: req.body.email,
    });
    let testingUserByUsername = await usersModel.findOne({
      username: req.body.username,
    });
    if (testingUserByEmail) {
      return res.status(400).send("Email already taken");
    } else if (testingUserByUsername) {
      return res.status(400).send("Username already taken");
    }
    let newUser = new usersModel({
      username: username,
      email: email,
      password: password,
      gender: gender,
      image: image,
      type: type,
      orders: orders,
    });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();
    await res.json(newUser);
    // const imagePath = `${req.protocol}://${req.hostname}:${process.env.PORT || 3000}/${req.file.path}`;
    // console.log(imagePath);
    // res.json({ newUser, imagePath });
  }
};

let login = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  // console.log(email, password);

  let user = await usersModel.findOne({ email: email });

  if (!user) {
    return res.status(400).send("Invalid email or password");
  }
  let checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(400).send("Invalid email or password");
  }

  let Token = jwt.sign(
    {
      userId: user._id,
      userType: user.type,
    },
    "thistokensecret"
  );

  res.header("x-auth-token", Token);

  return res.status(200).json({ user: user, token: Token });
};

module.exports = {
  getAllUsers,
  addNewUser,
  login,
};
