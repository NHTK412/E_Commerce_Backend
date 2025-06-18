const productService = require('../service/productService');
const categoryService = require('../service/categoryService');

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProductsService();
        res.status(200).json(products);
    }
    catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json(
            {
                message: 'Internal server error'

            });
    }
}


const getProductsByCategory = async (req, res) => {
    try {
        const product = await productService.getProductsByCategoryService(req.params.categoryId);

        console.log('Products fetched by category:', product);
        if (!product || product.length === 0) {
            return res.status(404).json({ message: 'No products found for this category' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching products by category:', error);
        res.status(500).json(
            {
                message: 'Internal server error'
            });
    }
}

const createProduct = async (req, res) => {
    try {
        // console.log('Creating product with data:', req.body);
        // console.log('Creating product with file:', req.file);
        if (!req.file) {
            return res.status(400).json({ message: 'Image file is required' });
        }
        const categoryId = req.body.category_id;
        if (!categoryId) {
            return res.status(400).json({ message: 'Category ID is required' });
        }
        const categoryExists = await categoryService.getCategoryByIdService(categoryId);
        if (!categoryExists) {
            return res.status(404).json({ message: 'Category not found' });
        }

        const newProduct = await productService.createProductService(req.body, req.file);

        if (!newProduct) {
            return res.status(400).json({ message: 'Failed to create product' });
        }
        res.status(201).json(newProduct);
    } catch (error) {
        console.log('Error creating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


const updateProduct = async (req, res) => {
    try {
        // const productId = req.params.id;
        // const updateData = req.body;
        // const image = req.file;
        const categoryId = req.body.category_id;
        if (!categoryId) {
            return res.status(400).json({ message: 'Category ID is required' });
        }
        const categoryExists = await categoryService.getCategoryByIdService(categoryId);
        if (!categoryExists) {
            return res.status(404).json({ message: 'Category not found' });
        }
        
        const updateProduct = await productService.updateProductService(req.params.id, req.body, req.file);
        if (!updateProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(updateProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const deleteProduct = await productService.deleteProductService(req.params.id);
        if (!deleteProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const deleteMultipleProducts = async (req, res) => {
    try {
        const productIds = req.body.productIds; // Assuming product IDs are sent in the request body

        if (!Array.isArray(productIds) || productIds.length === 0) {
            return res.status(400).json({ message: 'Invalid product IDs' });
        }

        const deleteResult = await productService.deleteMultipleProductsService(productIds);
        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({ message: 'No products found for deletion' });
        }
        res.status(200).json({ message: 'Products deleted successfully', count: deleteResult.deletedCount });
    } catch (error) {
        console.error('Error deleting multiple products:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    getAllProducts,
    getProductsByCategory,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteMultipleProducts
};