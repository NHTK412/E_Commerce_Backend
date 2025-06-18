const category = require('../model/category');

const getCategoryByIdService = async (categoryId) => {
    try {
        const categoryData = await category.findById(categoryId);
        return categoryData;

    } catch (error) {
        console.error('Error fetching category by ID:', error);
        return null;
    }
}


const getAllCategoriesService = async () => {
    try {
        const categories = await category.find();
        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return null;
    }
}

const createCategoryService = async (categoryData) => {
    try {
        const newCategory = new category(categoryData);
        await newCategory.save();
        return newCategory;
    } catch (error) {
        console.error('Error creating category:', error);
        return null;
    }
}

const updateCategoryService = async (categoryId, categoryData) => {
    try {
        const updatedCategory = await category.findByIdAndUpdate(
            categoryId,
            categoryData,
            { new: true, runValidators: true }
        );
        return updatedCategory;
    }
    catch (error) {
        console.error('Error updating category:', error);
        return null;
    }
}

const deleteCategoryService = async (categoryId) => {
    try {
        const deletedCategory = await category.findByIdAndDelete(categoryId);
        return deletedCategory;
    } catch (error) {
        console.error('Error deleting category:', error);
        return null;
    }
}


module.exports = {
    getAllCategoriesService,
    createCategoryService,
    updateCategoryService,
    deleteCategoryService,
    getCategoryByIdService
}