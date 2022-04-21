import { Router } from "express";
import { addUser, deleteUser, getSpecifiedUser, getUser, updateUser } from "../controllers/UserController.js";

const UserRoute = Router();
UserRoute.get("/users", getUser);
UserRoute.get("/login/:username.:password", getSpecifiedUser);
UserRoute.post("/register", addUser);
UserRoute.patch("/users/:id", updateUser);
UserRoute.delete("/users/:id", deleteUser);

export default UserRoute;