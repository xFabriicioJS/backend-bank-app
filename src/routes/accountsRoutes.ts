import express from "express";
import AccountController from "../controllers/accountController";

const accountRouter = express.Router();

accountRouter.post("/accounts", AccountController.create);

accountRouter.get("/accounts", AccountController.findAll);

accountRouter.get("/accounts/:id", AccountController.findById);

accountRouter.put("/accounts/:id", AccountController.update);

accountRouter.delete("/accounts/:id", AccountController.delete);

export { accountRouter };
