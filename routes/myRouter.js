const express = require("express")

const myRoute = express.Router()

// import controller 

const {getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct} = require("../controllers/productsController")

myRoute.route("/").get(getAllProducts).post(createProduct)
myRoute.route("/:id").get(getSingleProduct).patch(updateProduct).delete(deleteProduct)

module.exports = myRoute