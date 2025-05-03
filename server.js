const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection")
connectDb();
const errorHandler = require("./middleware/errorHandler")
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())
app.use("/api/contacts",require("./Routes/contactRouter"));
app.use("/api/users",require("./Routes/userRouter"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
