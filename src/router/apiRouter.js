const userRouter = require('./userRouter');
const addressRouter = require('./addressRouter');
const express = require('express');



const apiRouter = express.Router();
apiRouter.use('/user', userRouter);
apiRouter.use('/address', addressRouter);

module.exports = apiRouter;