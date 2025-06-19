const express = require('express')
const userController = require('../controller/userController');

const userRouter = express.Router();

userRouter.get('/id/:id', userController.getUserByIdController);

userRouter.get('/email/:email', userController.getUserByEmailController);

userRouter.get('/', userController.getAllUsersController);

userRouter.post('/', userController.createUserController);

userRouter.put('/:id', userController.updateUserController);

userRouter.delete('/:id', userController.deleteSoftUserController);


module.exports = userRouter;