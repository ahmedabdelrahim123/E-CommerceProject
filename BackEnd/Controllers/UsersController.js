// const validate = require("../Utils/coursesValidation");
const usersModel = require("../Model/usersModel");

let getAllUsers = async (req, res) => {
  let data = await usersModel.find({});
  res.json(data);
};

// let addNewUser = async (req, res) => {
//   var data = req.body;
//   console.log(data);
//   if(req.file){
//     data.image = req.file.path;
//   }else{
//     data.image = 'assets/products/avatar.png';
//   }
//     var newUser = new usersModel(data);
//     await newUser.save();
//     await res.json(newUser);
//     res.json({ user: { username, email, gender, type, orders, image: data.image } });
//   };
let addNewUser = async (req, res) => {
  var data = req.body;
  console.log(data);
  if(req.file){
    // Get just the filename from the path
    const filename = req.file.filename;
    data.image = filename;
  }else{
    data.image = 'avatar.png';
  }
  var newUser = new usersModel(data);
  await newUser.save();
  // Send back user data with image name
  res.json({ user: { username: newUser.username, email: newUser.email, gender: newUser.gender, type: newUser.type, orders: newUser.orders, image: newUser.image } });
};


//update
let updateUser = async (req, res) => {
  try {
    // Authenticate user making the request
    let id = req.params.id;
    const user = await usersModel.findById({_id: id});
    console.log(user);
    if (!user) {
      return res.status(404).send({ message: 'cant find id ' });
    }

    // Update user record in the database
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();

    res.send(user);
  } catch (e) {
    res.status(400).send({ message: 'cant save' });
  }
};



  // let addNewUser = async (req, res) => {
  //   var data = req.body;
  //   if(req.file){
  //     data.image = req.file.path;
  //   }else{
  //     data.image = 'assets/products/avatar.png';
  //   }
  //   var newUser = new usersModel(data);
  //   await newUser.save();
  //   const { _id, username, email, gender, type, orders } = newUser;
  //   res.json({ user: { _id, username, email, gender, type, orders, image: data.image } });
  // };
  










let login = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(email, password);
  try {
    let user = await usersModel.findOne({email: email, password: password});
    console.log(user);
    if (!user) {
      res.status(401).json({
        message: "Login not successful",
        error: "User not found",
      });
    } else {
      res.status(200).json({
        message: "Login successful",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "An error occurred",
      error: error.message,
    });
  }
  // console.log("user: " + user);
  // if (!user) {
  //   console.log("Invalid Credentials");
  //   res.json({ message: "Invalid Credentials" });
  // } else {
  //   console.log("in");
  //   res.json(user);
  // }

  // res.json(user);
};


module.exports = {
  getAllUsers,
  addNewUser,
  login,
  updateUser
};
