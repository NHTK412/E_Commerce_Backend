const cartService = require("../service/cartService");

const getCartByUserIdController = async (req, res) => {
    try {
        const cartData = await cartService.getCartByUserIdService(req.params.userId)
        res.status(200).json(cartData);
    } catch (error) {
        console.log("Lỗi lấy giỏ hàng");
        res.status(500).json({ message: 'Internal server error' });

    }
}


module.exports = {
    getCartByUserIdController
}