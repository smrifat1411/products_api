const Product = require("../models/productSchema")

const getAllProducts = async (req, res) => {
  // res.send("I am from all products");
  const allProducts = await Product.find({})
  res.json({length:allProducts.length,allProducts})

};

const createProduct = async (req, res,next) => {
  //   res.send("I am from Create Product");
  try {
    const product =  await Product.create(req.body)
  res.json({product});
  } catch (error) {
    // res.send()
    next(error)
  }
  
};
const getSingleProduct = async (req, res) => {
  //   res.send("I am from Single Product");
  const { id } = req.params;
  res.json({ searchId: id });
  // res.json(req.body)
};
const deleteProduct = async (req, res) => {
//   res.send("I am from Delete Product");
  const { id } = req.params;
  res.json({ searchId: id });
};
const updateProduct = async (req, res) => {
//   res.send("I am from Delete Product");
  const { id } = req.params;
  res.json({ searchId: id });
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  createProduct,
};
