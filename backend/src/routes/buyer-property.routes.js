import express from "express";
import { getAllPropertiesForBuyer, getPropertyByIdForBuyer } from "../controllers/buyer-property.controller.js";

const router = express.Router();

router.get("/", getAllPropertiesForBuyer);
router.get("/:id", getPropertyByIdForBuyer);

export { router as buyerPropertyRoutes }