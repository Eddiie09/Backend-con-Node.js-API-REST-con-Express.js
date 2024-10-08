const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");

const { logErrors, errorHandler,  boomErrorHandler} = require("./middlewares/error.handler")

const app = express();
const port = 3002;
app.use(express.json());

const whitelist =['http://localhost:8080', 'https://myapp.co'];
const options ={
  origin: (origin, callback) =>{
    if (whitelist.includes(origin)){
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors());


app.get("/", (req, res) =>{
  res.send("Hola mi primer server en express");
});


routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Mi port " + port)
});


module.exports = app;
