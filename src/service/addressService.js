const address = require('../model/address');
const mongoose = require('mongoose');

const getAddressByIdService = async (userId) => {
    try {
        const addressData = await address.find({ user_id: userId });
        if (!addressData) {
            return null;
        }
        return addressData;
    } catch (error) {
        console.error('Error fetching address from database:', error);
        return null
    }
};


const createAddressService = async (addressData) => {
    try {
        const newAddress = await address.create(addressData);
        return newAddress;
    } catch (error) {
        console.error('Error creating address in database:', error);
        return null;
    }
};

const updateAddressService = async (addressId, addressData) => {
    try {
        const updatedAddress = await address.findByIdAndUpdate(addressId, addressData, { new: true });
        if (!updatedAddress) {
            return null;
        }
        return updatedAddress;
    }
    catch (error) {
        console.error('Error updating address in database:', error);
        return null;
    }
};

const deleteAddressService = async (addressId) => {
    try {
        const deletedAddress = await address.findByIdAndDelete(addressId);
        if (!deletedAddress) {
            return null;
        }
        return deletedAddress;
    } catch (error) {
        console.error('Error deleting address in database:', error);
        return null;
    }
};

const deleteManyAddressService = async (addressIds) => {
    try {
        const deletedAddresses = await address.deleteMany(
            { _id: 
                { 
                    $in: addressIds 
                } 
            }
        );
        if (!deletedAddresses) {
            return null;
        }
        return deletedAddresses;
    } catch (error) {
        console.error('Error deleting addresses in database:', error);
        return null;
    }
};


module.exports = {
    getAddressByIdService,
    createAddressService,
    updateAddressService,
    deleteAddressService,
    deleteManyAddressService
};