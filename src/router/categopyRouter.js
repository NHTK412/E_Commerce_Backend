const express = require('express');

const categopyController = require('../controller/categoryController');
const categoryRouter = express.Router();


categoryRouter.get('/', categopyController.getAllCategoriesController);
categoryRouter.post('/', categopyController.createCategoryController);
categoryRouter.put('/:categoryId', categopyController.updateCategoryController);
categoryRouter.delete('/:categoryId', categopyController.deleteCategoryController);






module.exports = categoryRouter;