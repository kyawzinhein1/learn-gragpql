const User = require("../models/User");

const userResolver = {
    // READ all users
    users: async () => {
        try {
            return await User.find();
        } catch (error) {
            throw new Error("Failed to fetch users");
        }
    },

    // READ a single user by ID
    user: async ({ id }) => {
        try {
            return await User.findById(id);
        } catch (error) {
            throw new Error("Failed to fetch user");
        }
    },

    // CREATE a new user
    createUser: async ({ name, age }) => {
        try {
            const newUser = new User({ name, age });
            return await newUser.save();
        } catch (error) {
            throw new Error("Failed to create user");
        }
    },

    // UPDATE an existing user
    updateUser: async ({ id, name, age }) => {
        try {
            const user = await User.findById(id);
            if (!user) throw new Error("User not found");

            user.name = name;
            user.age = age;
            return await user.save();
        } catch (error) {
            throw new Error("Failed to update user");
        }
    },

    // DELETE a user
    deleteUser: async ({ id }) => {
        try {
            const result = await User.findByIdAndDelete(id);
            if (!result) throw new Error("User not found");
            return true;
        } catch (error) {
            throw new Error("Failed to delete user");
        }
    },
};

module.exports = userResolver;
