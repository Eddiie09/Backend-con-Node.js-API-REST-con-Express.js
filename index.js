const express = require("express");
const routerApi = require("./routes")

const app = express();
const port = 3002;
app.use(express.json());


app.get("/", (req, res) =>{
  res.send("Hola mi primer server en express");
});


routerApi(app);

app.listen(port, () => {
  console.log("Mi port " + port)
});


