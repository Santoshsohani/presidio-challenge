import dotenv from "dotenv"
import mongoose from "mongoose";
import express from "express";

import { connectDB } from "./db/index.js";
import { app } from "./app.js";

// routes import
import { homeRoutes } from "./routes/home.routes.js";
import { sellerPropertyRoutes } from "./routes/seller-property.routes.js";
import { buyerPropertyRoutes } from "./routes/buyer-property.routes.js";
import { userRoutes } from "./routes/user.routes.js";

dotenv.config({
    path: './.env'
})

// Routes
app.use('/', homeRoutes)
app.use('/api/user', userRoutes)
app.use('/api/seller/properties', sellerPropertyRoutes)
app.use('/api/buyer/properties', buyerPropertyRoutes)

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    })


