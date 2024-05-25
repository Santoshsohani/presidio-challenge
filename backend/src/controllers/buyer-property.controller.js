import { Property } from "../models/property.model.js";

// Get all available rental properties
export const getAllPropertiesForBuyer = async (req, res) => {
    try {
        const properties = await Property.find();
        res.send(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get property by id
export const getPropertyByIdForBuyer = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ error: "Property not found" });
        }
        res.send(property);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
