const router = require('express').Router();
const User = require('../model/usermodel');

router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists",
                success: false
            });
        }
        const newUser = new User({ 
            name: name,
            email: email,
            password: password
        });
        await newUser.save();
        res.status(201).json({
            message: "User created successfully",
            success: true,
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Unable to create user",
            error: error.message 
        });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ 
                message: "User is not found",
                success: false
            });
        }
        const { name, email, password } = req.body;
        user.name = name;
        user.email = email;
        user.password = password;
        
        await user.save();
        res.status(200).json({
            message: "User updated successfully",
            success: true,
            user: user
        });
        
    } catch (error) {
        res.status(500).json({ 
            message: "Error retrieving user",
            error: error.message 
        });
    }
});
module.exports = router;