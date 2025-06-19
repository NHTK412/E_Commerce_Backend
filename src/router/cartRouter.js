const express = require('express');
const cartController = require("../controller/cartController")


const cartRouter = express.Router();

cartRouter.get('/:userId', cartController.getCartByUserIdController);


module.exports = cartRouter;