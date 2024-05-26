import mongoose from "mongoose";
import { hashPassword, generateAuthToken, findByCredentials } from "../utils/user.utils.js";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["buyer", "seller"],
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
});

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await hashPassword(user.password);
    }
    next();
});


userSchema.methods.generateAuthToken = async function () {
    const user = this;
    return generateAuthToken(user);
};


userSchema.statics.findByCredentials = async (email, password) => {
    return findByCredentials(email, password);
};

const User = mongoose.model("User", userSchema);
export { User };
