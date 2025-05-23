const userService = require('../service/userService');
const bcrypt = require('bcrypt');

const getUserByIdController = async (req, res) => {
    try {
        const userId = req.params.id;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        const user = await userService.getUserByIdService(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found'});
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createUserController = async (req, res) => {
    try {
        const userData = req.body;
        if (!userData || !userData.name || !userData.email || !userData.password) {
            return res.status(400).json({ message: 'Name, email and password are required' });
        }
        const existingUser = await userService.getUserByEmailService(userData.email);
        console.log('Checking for existing user:', existingUser);
        if (existingUser) {
            return res.status(409).json({ 
                message: 'User already exists' , 
                success: false
            });
        }

        const UserSoftDelete = await userService.getUserByEmailSoftDeleteService(userData.email);
        console.log('Checking for UserSoftDelete:', UserSoftDelete);
        if (UserSoftDelete) {
            return res.status(409).json({ 
                message: 'User Soft Delete',
                success: false
            });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        userData.password_hash = await bcrypt.hash(userData.password, salt);
        delete userData.password;

        const newUser = await userService.createUserService(userData);
        if (!newUser) {
            return res.status(500).json({ message: 'Error creating user' });
        }
        console.log('User created successfully:', newUser);
        res.status(201).json({ 
            message: 'User created successfully',
            success: true,
            user: newUser 
        });

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });

    }
};

const getUserByEmailController = async (req, res) => {
    try {
        const email = req.params.email;
        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        const user = await userService.getUserByEmailService(email);  
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        

        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getAllUsersController = async (req, res) => {
    try {
        const users = await userService.getAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateUserController = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;

        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        if (!userData || !userData.name || !userData.email) {
            return res.status(400).json({ message: 'Name and email are required' });
        }

        const updatedUser = await userService.updateUserService(userId, userData);
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteUserController = async (req, res) => {
    try {
        const userId = req.params.id;
        if (!userId) {
            return res.status(400).json({ message: 'User ID is required' });
        }
        const deletedUser = await userService.deleteUserService(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found', user: deletedUser });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error' });

    }
};

module.exports = {
    getUserByIdController,
    createUserController,
    getUserByEmailController,
    getAllUsersController,
    updateUserController,
    deleteUserController
};

