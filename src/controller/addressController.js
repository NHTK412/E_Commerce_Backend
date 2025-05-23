const addressService = require('../service/addressService');
const userService = require('../service/userService');
const getAddressByIdController = async (req, res) => {
    try {
        const userId = req.params.userId;
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        const address = await addressService.getAddressByIdService(userId);
        if (!address) {
            return res.status(404).json({ message: 'Address not found' });
        }
        res.status(200).json(address);

    } catch (error) {
        console.error('Error fetching address:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createAddressController = async (req, res) => {
    try {
        const addressData = req.body;
        if (!addressData || !addressData.user_id) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        const user = await userService.getUserByIdService(addressData.user_id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const newAddress = await addressService.createAddressService(addressData);
        if (!newAddress) {
            return res.status(500).json({ message: 'Error creating address' });
        }
        res.status(201).json({ message: 'Address created successfully', address: newAddress });

    } catch (error) {
        console.error('Error creating address:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateAddressController = async (req, res) => {
    try {
        const addressId = req.params.addressId;
        const addressData = req.body;

        if (!addressId) {
            return res.status(400).json({ message: 'Address ID is required' });
        }

        if (!addressData || !addressData.user_id) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const user = await userService.getUserByIdService(addressData.user_id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const updatedAddress = await addressService.updateAddressService(addressId, addressData);
        if (!updatedAddress) {
            return res.status(500).json({ message: 'Error updating address' });
        }

        res.status(200).json({ message: 'Address updated successfully', address: updatedAddress });

    } catch (error) {
        console.error('Error updating address:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteAddressController = async (req, res) => {
    try {
        const addressId = req.params.addressId;

        if (!addressId) {
            return res.status(400).json({ message: 'Address ID is required' });
        }

        const deletedAddress = await addressService.deleteAddressService(addressId);
        if (!deletedAddress) {
            return res.status(404).json({ message: 'Address not found' });
        }

        res.status(200).json({ message: 'Address deleted successfully', address: deletedAddress });

    } catch (error) {
        console.error('Error deleting address:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteManyAddressController = async (req, res) => {
    try {
        const addressIds = req.body.addressIds;
    
        if (!addressIds || !Array.isArray(addressIds)) {
            return res.status(400).json({ message: 'Address IDs are required' });
        }
  
        const deletedAddresses = await addressService.deleteManyAddressService(addressIds);
        if (!deletedAddresses) {
            return res.status(500).json({ message: 'Error deleting addresses' });
        }
        res.status(200).json({ message: 'Addresses deleted successfully', addresses: deletedAddresses });
    } catch (error) {
        console.error('Error deleting addresses:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getAddressByIdController,
    createAddressController,
    updateAddressController,
    deleteAddressController,
    deleteManyAddressController
};