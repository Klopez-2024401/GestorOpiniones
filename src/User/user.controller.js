import User from "./user.model.js";
import bcrypt from "bcryptjs";
import { generateJWT } from "../../helper/jwt-generator.js";

export const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const salt = bcrypt.genSaltSync();
        const hashedPassword = bcrypt.hashSync(password, salt);

        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({ message: 'Usuario creado' });
    } catch (error) {
        res.status(500).json({ message: 'Error registro' });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { login, password } = req.body;

        const user = await User.findOne({
            $or: [{ email: login }, { username: login }]
        });

        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        const token = generateJWT(user.id);

        res.json({ token });

    } catch (error) {
        res.status(500).json({ message: 'Error login' });
    }
};