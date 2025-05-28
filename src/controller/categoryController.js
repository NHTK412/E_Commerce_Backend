const categoryService = require('../service/categoryService');


const getAllCategoriesController = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategoriesService();
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createCategoryController = async (req, res) => {
    try {
        const newCategory = await categoryService.createCategoryService(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


const updateCategoryController = async (req, res) => {
    const { categoryId } = req.params;
    try {
        const updatedCategory = await categoryService.updateCategoryService(categoryId, req.body);
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(updatedCategory);
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const deleteCategoryController = async (req, res) => {
    const { categoryId } = req.params;
    try {
        const deletedCategory = await categoryService.deleteCategoryService(categoryId);
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = {
    getAllCategoriesController,
    createCategoryController,
    updateCategoryController, 
    deleteCategoryController  
}