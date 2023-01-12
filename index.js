const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const orderRoute = require("./routes/order")
const cartRoute = require("./routes/cart")

dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnection successful"))
.catch((err) => {
    console.log(err);
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/order", orderRoute);
app.use("/api/cart", cartRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("server is currently running");
})

