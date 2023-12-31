const express=require("express");
require("dotenv").config();
const Db=require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes =require("./routes/user");
const app = express();
port=process.env.PORT;
Db.connect();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

app.use("/api/v1/auth", userRoutes);


app.listen(port||3000,()=>{
    console.log(`server is running on ${port}`);
})




