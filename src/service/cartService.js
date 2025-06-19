const cart = require('../model/cart');

const createCartService = async (userId) => {
    try {
        const newCart = cart.create({
            user_id: userId
        });
        return newCart;
    } catch (error) {
        console.error('Error creating cart:', error);
        return null;
    }
}

const getCartByUserIdService = async (userId) => {
    try {
        const cartData = await cart.findOne({
            user_id: userId
        });
        if (!cartData) {
            return null;
        }
        return cartData;
        // còn thêm sản phẩm nữa mà chưa có service thêm sp
    } catch (error) {
        console.log('Error fetching cart by user ID:', error);
        return null;
    }
}

// const deleteSoftCartByUserIdService = async (userId) => {
//     try {
//         const deletedCart = await cart.delete({
//             user_id : userId
//         });
//         return deletedCart;
//     } catch (error) {
//         console.error('Error deleting cart by user ID:', error);
//         return null;
//     }
// }

const deleteCartByUserIdService = async (userId) => {
    try {
        const deletedCart = await cart.deleteOne({
            user_id: userId
        })
        return deletedCart;
    } catch (error) {
        console.error('Error deleting cart by user ID:', error);
        return null;
    }
}



module.exports = {
    createCartService,
    getCartByUserIdService,
    deleteCartByUserIdService,
    // deleteSoftCartByUserIdService
}