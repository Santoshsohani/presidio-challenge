import express from "express";
import { getPropertyById, getProperties, addProperty, updateProperty, deleteProperty } from "../controllers/seller-property.controller.js";

const router = express.Router();

router.get("/", getProperties);
router.get("/:id", getPropertyById);
router.post("/", addProperty);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

export { router as sellerPropertyRoutes };
