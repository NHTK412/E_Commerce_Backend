const express = require('express');
const productController = require("../controller/productController");

const upload = require('../config/uploadFile'); // Assuming you have a file upload configuration



const productRouter = express.Router();

productRouter.get('/', productController.getAllProducts);

productRouter.get('/category/:categoryId', productController.getProductsByCategory);

productRouter.post('/' ,upload.single("image"),productController.createProduct);

productRouter.put('/:id',upload.single("image") ,productController.updateProduct);

productRouter.delete('/delete-multiple', productController.deleteMultipleProducts);

productRouter.delete('/:id', productController.deleteProduct);










module.exports = productRouter;