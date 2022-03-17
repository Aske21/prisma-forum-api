import express from "express";
import cors from "cors";
import userService from "../services/userService";

const userController = express.Router();

userController.use(cors());

userController.get("/getAllUsersWithPosts", (req, res) => {
  userService.getAllUsersWithPosts(req, res);
});

userController.get("/getAllUsers", (req, res) => {
  userService.getAllUsers(req, res);
});

userController.get("/getUserByID/:id", (req, res) => {
  userService.getUserByID(req, res);
});

userController.delete("/deleteUser/:id", (req, res) => {
  userService.deleteUser(req, res);
});

export default userController;
