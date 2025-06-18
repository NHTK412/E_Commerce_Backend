const product = require("../model/product");

const getAllProductsService = async () => {
    try {
        const products = await product.find();
        return products;
    }
    catch (error) {
        console.error('Error fetching products:', error);
        return null;
    }
}

const getProductsByCategoryService = async (categoryId) => {
    try {
        const products = await product.find({
            category_id: categoryId
        })
        return products;
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return null;
    }
}

const createProductService = async (productData, image) => {
    try {
        productData.image_path = image.filename;

        
        
        const newProduct = new product(productData);
        await newProduct.save();
        // console.log('Product created successfully:', newProduct);
        return newProduct;
    } catch (error) {
        console.log('Error creating product:', error);
        return null;
    }
}

const updateProductService = async (productId, updateData, image) => {
    try {
        updateData.image_path = image.filename;
        console.log('Updating product with ID:', productId, 'and data:', updateData);
        const updateProduct = await product.findByIdAndUpdate(productId, updateData, { new: true });
        return updateProduct;
    } catch (error) {
        console.error('Error updating product:', error);
        return null;
    }
}

const deleteProductService = async (productId) => {
    try {
        const deleteProduct = await product.findByIdAndDelete(productId);
        if (!deleteProduct) {
            console.error('Product not found for deletion:', productId);
            return null;
        }
        return deleteProduct;
    } catch (error) {
        console.error('Error deleting product:', error);
        return null;
    }
}

const deleteMultipleProductsService = async (productIds) => {
    try {
        // console.log('Deleting multiple products with IDs:', productIds);
        const deleteResult = await product.deleteMany({ _id: {
            $in: productIds
        }});
        return deleteResult;
    }
    catch (error) {
        console.error('Error deleting multiple products:', error);
        return null;
    }
}

module.exports = {
    getAllProductsService,
    getProductsByCategoryService,
    createProductService,
    updateProductService,
    deleteProductService,
    deleteMultipleProductsService
}
