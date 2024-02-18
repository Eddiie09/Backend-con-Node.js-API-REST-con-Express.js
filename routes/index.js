const productsRouter = require("./productsRouter");
const usersRouter = require("./usersRouter");
const categoriesRouter = require("./categoriesRouters");

function routerApi(app) {
  app.use("/products", productsRouter);
  app.use("/users", usersRouter);
  app.use("/categories", categoriesRouter);
}

module.exports = routerApi;
