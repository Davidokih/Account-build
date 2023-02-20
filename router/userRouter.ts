import express from "express"

const router = express.Router()
import { getUser, createUser, updateUser, deleteUser,singleUser } from "../controller/userController"

router.route("/").get(getUser)
router.route("/create").post(createUser)

router.route("/:id").get(singleUser).patch(updateUser).delete(deleteUser)

export default router