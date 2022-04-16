import md5 from "md5";
import User from "../models/UserModel.js";

const getUser = async(req, res) => {
    try {
        const response = await User.findAll();
        res.send({
            status: 200,
            response
        })
    } catch (error) {
        console.log(error)
    }
}

const getSpecifiedUser = async(req, res) => {
    try {
        const response = await User.findOne({
            where: {
                username: req.body.username,
                password: md5(req.body.password)
            }
        });
        res.send({
            status: 200,
            message: "Login Success",
            response
        })
    } catch (error) {
        console.log(error)
    }
}

const addUser = async(req, res) => {
    try {
        const response = await User.create({
            name: req.body.name,
            user_access: "user",
            username: req.body.username,
            password: md5(req.body.password)
        })
        res.send({
            status: 201,
            message: "User Created"
        });
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async(req, res) => {
    try {
        const response = await User.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.send({
            status: 200,
            message: "User Updated"
        })
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async(req, res) => {
    try {
        const response = await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send({
            status: 200,
            message: "User Deleted"
        })
    } catch (error) {
        console.log(error);
    }
}

export {getUser, getSpecifiedUser, addUser, updateUser, deleteUser};