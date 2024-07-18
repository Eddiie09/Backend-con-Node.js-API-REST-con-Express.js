const { stack } = require("../routes/productsRouter");

function logErrors (err, req, res, next){
  console.log("logErrors");
  console.error(error);
  next(err);
}

function errorHandler(err, req, res, next){
  console.log("errorHandler");
  res.status(404).json({
    message: err.message,
    stack: err.stack,
  });
}
function boomErrorHandler(err, req, res, next){
 if (err.isBomm) {
  const { output } = err;
  res.status(output.statusCode).json(output.payload);
 } else {
  next(err);
 }
}


module.exports = { logErrors, errorHandler, boomErrorHandler }
