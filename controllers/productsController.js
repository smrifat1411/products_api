const getAllProducts = async (req, res) => {
  res.send("I am from all products");
};

const createProduct = async (req, res) => {
  //   res.send("I am from Create Product");
  res.json(req.body);
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
