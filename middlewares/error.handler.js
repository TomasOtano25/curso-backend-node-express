// Creamos function que nos hara llegar a un middleware de tipo error:
// Middleware de tipo error
function logErrors(error, req, res, next) {
  console.error(error);

  next(error);
  // enviar los errores al tracking
}

function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = { logErrors, errorHandler };
