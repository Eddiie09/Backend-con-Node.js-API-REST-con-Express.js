const express = require("express");
const routerApi = require("./routes");

const { logErrors, errorHandler,  boomErrorHandler} = require("./middlewares/error.handler")

const app = express();
const port = 3002;
app.use(express.json());


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


