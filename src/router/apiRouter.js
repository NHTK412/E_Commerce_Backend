const userRouter = require('./userRouter');
const addressRouter = require('./addressRouter');
const categoryRouter = require('./categopyRouter');
const productRouter = require('./productRouter'); 
const express = require('express');



const apiRouter = express.Router();
apiRouter.use('/user', userRouter);
apiRouter.use('/address', addressRouter);
apiRouter.use('/category', categoryRouter);
apiRouter.use('/product', productRouter);

module.exports = apiRouter; 