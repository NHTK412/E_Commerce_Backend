const userRouter = require('./userRouter');
const addressRouter = require('./addressRouter');
const categoryRouter = require('./categopyRouter');
const productRouter = require('./productRouter');
const cartRouter = require('./cartRouter'); 
const express = require('express');



const apiRouter = express.Router();
apiRouter.use('/user', userRouter);
apiRouter.use('/address', addressRouter);
apiRouter.use('/category', categoryRouter);
apiRouter.use('/product', productRouter);
apiRouter.use('/cart', cartRouter);

module.exports = apiRouter; 