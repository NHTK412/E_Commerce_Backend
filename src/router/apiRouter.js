const userRouter = require('./userRouter');
const express = require('express');



const apiRouter = express.Router();
apiRouter.use('/user', userRouter);

module.exports = apiRouter;