require("dotenv").config();
const express = require("express");
const app = express();
const notFoundMid = require("./middlewares/not-found");
const errMid = require("./middlewares/error");
const myRouter = require("./routes/myRouter")
const dbConnect = require("./db/conncect")

const port = process.env.PORT|| 4000;

// MiddleWares

app.use(express.json());

//routes + middleware

app.use("/api/v1/products", myRouter)

// app.get("/", (req, res) => {
//   res.send("Product Page");
// });

app.use(notFoundMid);
app.use(errMid);



const start = async () => {
  try {
    // Connect Db 
    await dbConnect(process.env.DB_URI)
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
