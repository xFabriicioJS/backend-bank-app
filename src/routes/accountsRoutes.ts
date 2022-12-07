import express from "express";
import UsersControllers from "../controllers/accountController";

const router = express.Router();

router.post("/usuarios", UsersControllers.create);

router.get("/usuarios", UsersControllers.findAll);

router.get("/usuarios/:id", UsersControllers.findById);

router.put("/usuarios/:id", UsersControllers.update);

router.delete("/usuarios/:id", UsersControllers.delete);

export { router };
