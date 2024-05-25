import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    area:{
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ["rent", "sale"],
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    schoolsNearby: {
        type: String,
        required: false
    },
    collegeseNearby: {
        type: String,
        required: false
    },
    hospitalsNearby: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: false
    }
}, {
    timestamps: true
})

const Property = mongoose.model("Property", propertySchema);

export { Property }