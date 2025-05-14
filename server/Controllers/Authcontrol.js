const User = require('../Models/user-model');
const Contact = require('../Models/Cont-model')
const bcrypt = require('bcryptjs');
const { registerSchema,
    loginSchema } = require('../Validation/Auth-Valid')



const home = async (req, res) => {
    try {
        res.send("<h1 style=color:blue ;>Hiii Server Home</h1>")
    } catch (error) {

    }
}

const register = async (req, res, next) => {
    try {
        const validatedData = registerSchema.parse(req.body);
        const { username, email, phone, password } = validatedData;

        const userExit = await User.findOne({ email });
        if (userExit) {
            return res.status(201).json({ message: "Already Have Account" });
        }

        const UserCreated = await User.create({ username, email, phone, password });
        res.status(200).json({
            message: "Account Created",
            Token: await UserCreated.generateToken(),
            UserId: UserCreated._id.toString(),
        });
    } catch (err) {
        if (err.name === "ZodError") {
            const messages = err.errors.map(e => e.message);
            return res.status(400).json({ errors: messages });
        }


        const error = {
            status: 422,
            message: "Server side error",
            extradetails: "Kindly check your server",
        };
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const validatedData = loginSchema.parse(req.body);
        const { email, password } = validatedData;

        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "User not valid" });
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);
        if (isPasswordValid) {
            res.json({
                message: "Account Login",
                Token: await userExist.generateToken(),
                UserId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid Email or Password" });
        }
    } catch (err) {
        if (err.name === "ZodError") {
            const messages = err.errors.map(e => e.message);
            return res.status(400).json({ errors: messages });
        }


        console.error("Server error", err);
        next(err);
    }
};
const contact = async (req, res) => {

    try {
        const response = req.body;
        await Contact.create(response);
        res.json({ message: "message send" })
    } catch (error) {

    }
}

const profile = (req, res) => {
    User.find()
        .then(users => res.json(users))
}



module.exports = { home, register, login, contact, profile }