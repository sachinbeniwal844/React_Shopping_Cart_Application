import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoute from "./Route/user.js";

const app = express();

dotenv.config();
// app.use(cors());
app.use(cors({
    origin : ["http://localhost:5173","https://react-shopping-cart-application.vercel.app/"],credentials:true
}));
app.use(express.json());      // ya middleware very imp h.. jb postman/body se data bhejte h to ya use json ma parse krta h...


const PORT = process.env.PORT || 2000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
    
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/api/user", userRoute);

app.get('/', (req, res) => {
  res.send('<h1>This is the fullStack Project of React Shopping Cart</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});