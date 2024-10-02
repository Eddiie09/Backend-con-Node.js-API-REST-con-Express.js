// Eliminar esta línea si no es necesaria
const { stack } = require("../routes/productsRouter");

function logErrors(err, req, res, next) {
  console.log("logErrors");
  console.error(err);  // Cambié 'error' a 'err'
  next(err);  // Pasamos el error al siguiente middleware
}

function errorHandler(err, req, res, next) {
  console.log("errorHandler");
  res.status(500).json({
    message: err.message,
    // Descomenta 'stack' si lo necesitas para debug:
    // stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {  // Cambié 'isBomm' a 'isBoom'
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);  // Pasamos el error si no es un error de Boom
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
