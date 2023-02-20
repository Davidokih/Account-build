import userModel from "../model/userModel"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import { Request, Response } from "express"

export const getUser = async(req:Request , res:Response): Promise<Response> => {
    try {
        const user = await userModel.find().sort({createdAt: -1})

        return res.status(200).json({
            status: "Success",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            message: error
        })
    }
}

export const singleUser = async(req:Request , res:Response): Promise<Response> => {
    try {
        const user = await userModel.findById(req.params.id)

        return res.status(200).json({
            status: "Success",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            message: error
        })
    }
}

export const updateUser = async(req:Request , res:Response): Promise<Response> => {
    try {
        const { userName, fullName} = req.body
        const user = await userModel.findByIdAndUpdate(req.params.id, {
            userName,
            fullName
        },{new: true})

        return res.status(200).json({
            status: "Success",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            message: error
        })
    }
}

export const deleteUser = async(req:Request , res:Response): Promise<Response> => {
    try {
        const { userName, fullName} = req.body
        const user = await userModel.findByIdAndDelete(req.params.id)

        return res.status(200).json({
            status: "Success",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            message: error
        })
    }
}

export const createUser = async(req:Request , res:Response): Promise<Response> => {
    try {
        const { userName, fullName, email, password,accessToken } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)
        const user = await userModel.create({
            userName, fullName, email, password:hashed,AccessToken: 100 + Math.floor(Math.random() * 1000)
        })

        return res.status(200).json({
            status: "Success",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            message: error
        })
    }
}

export const signInUser = async(req:Request , res:Response): Promise<Response> => {
    try {
        const { userName, fullName, email, password,accessToken } = req.body
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(password, salt)
        const user = await userModel.create({
            userName, fullName, email, password:hashed,AccessToken: 100 + Math.floor(Math.random() * 1000)
        })

        return res.status(200).json({
            status: "Success",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: "Fail",
            message: error
        })
    }
}