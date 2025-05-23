const addressController = require('../controller/addressController');
const express = require('express');

const addressRouter = express.Router();

addressRouter.get('/:userId', addressController.getAddressByIdController);

addressRouter.post('/', addressController.createAddressController);

addressRouter.put('/:addressId', addressController.updateAddressController);

addressRouter.delete('/:addressId', addressController.deleteAddressController);

addressRouter.post('/deleteMany', addressController.deleteManyAddressController);

module.exports = addressRouter;