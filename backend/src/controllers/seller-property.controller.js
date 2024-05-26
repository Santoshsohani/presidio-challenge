import { Property } from "../models/property.model.js";

// Add a new property
export const addProperty = async (req, res) => {
    try {
        const property = new Property(req.body);
        await property.save();
        res.send(property);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Get all properties with their respective sellers
export const getPropertiesWithSellers = async (req, res) => {
    try {
        const properties = await Property.find().populate('owner');
        res.send(properties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Get property by id
export const getPropertyById = async (req, res) => {
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

// Update property
export const updateProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(property);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Delete property
export const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        res.send(property);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
