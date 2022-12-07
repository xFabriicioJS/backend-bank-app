import express from "express";
import AccountController from "../controllers/accountController";

const router = express.Router();

router.post("/accounts", AccountController.create);

router.get("/accounts", AccountController.findAll);

router.get("/accounts/:id", AccountController.findById);

router.put("/accounts/:id", AccountController.update);

router.delete("/accounts/:id", AccountController.delete);

export { router };
