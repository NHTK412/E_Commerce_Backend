const user = require('../model/user');

const getUserByIdService = async (userId) => {
    try {
        const userData = await user.findById(userId);
        if (!userData)
        {
            return null;
        }
        return {
            id: userData._id,
            name: userData.name,
            email: userData.email,
            role: userData.role,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt
        };
    }
    catch (error) {
        console.error('Error fetching user from database:', error);
        return null;
    }
};

const createUserService = async (userData) => {
    try {
        const newUser = new user(userData);
        const savedUser = await newUser.save();
        return {
            id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            role: savedUser.role,
            createdAt: savedUser.createdAt,
            updatedAt: savedUser.updatedAt
        };
    }
    catch (error) {
        console.error('Error creating user in database:', error);
        return null;
    }
};

const getUserByEmailSoftDeleteService = async (email) => {
    try {
        const userData = await user.findOneDeleted({ email });
        if (!userData) {
            return null;;
        }
        return {
            id: userData._id,
            name: userData.name,
            email: userData.email,
            role: userData.role,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt
        };
    } catch (error) {
        console.error('Error fetching user from database:', error);
        return null;
    }
};

const getUserByEmailService = async (email) => {
    try {
        const userData = await user.findOne({ email });
        if (!userData) {
            return null;;
        }
        return {
            id: userData._id,
            name: userData.name,
            email: userData.email,
            role: userData.role,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt
        };
    }
    catch (error) {
        console.error('Error fetching user from database:', error);
        return null;
    }
};

const getAllUsersService = async () => {
    try {
        const usersData = await user.find();
        return usersData.map(userData => ({
            id: userData._id,
            name: userData.name,
            email: userData.email,
            role: userData.role,
            createdAt: userData.createdAt,
            updatedAt: userData.updatedAt
        }));
    }
    catch (error) {
        console.error('Error fetching all users from database:', error);
        return null;
    }
};

const updateUserService = async (userId, userData) => {
    try {
        const updatedUser = await user.findByIdAndUpdate(userId, userData, { new: true });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return {
            id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
            createdAt: updatedUser.createdAt,
            updatedAt: updatedUser.updatedAt
        };
    } catch (error) {
        console.error('Error updating user in database:', error);
        return null;
    }
};

const deleteSoftUserService = async (userId) => {
    try {
        // const deletedUser = await user.findByIdAndDelete(userId);
        // Xóa mềm
        const deletedUser = await user.deleteById(userId);

        
        return {
            id: deletedUser._id,
            name: deletedUser.name,
            email: deletedUser.email,
            role: deletedUser.role,
            createdAt: deletedUser.createdAt,
            updatedAt: deletedUser.updatedAt
        };
    } catch (error) {
        console.error('Error deleting user from database:', error);
        return null;
    }
};

const deleteUserService = async (userId) => {
    try {

    } catch (error) {
        console.error('Error deleting user from database:', error);
        return null;
    }
}

module.exports = {
    getUserByIdService,
    createUserService,
    getUserByEmailService,
    getUserByEmailSoftDeleteService,
    getAllUsersService,
    updateUserService,
    deleteUserService,
    deleteSoftUserService
};

