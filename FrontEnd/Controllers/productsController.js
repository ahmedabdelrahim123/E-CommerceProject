// const validate = require("../Utils/coursesValidation");
const productsModel = require("../Model/productsModel");

let getAllProducts = async (req, res) => {
  // console.log("in controller",req);
  let data = await productsModel.find({});
  res.json(data);
};

let getProductById = async (req, res) => {
  console.log("in controller",req);
  let id = req.params.id;
  console.log("in controller",req.params.id);
  let product = await productsModel.findById({_id: id});
  console.log("in controller",product);
  res.json(product);
};

module.exports = {
  getAllProducts,
  getProductById
};
