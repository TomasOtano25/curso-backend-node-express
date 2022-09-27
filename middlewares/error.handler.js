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

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;

    res.status(output.statusCode).json(output.payload);
  }

  next(error);
}

module.exports = { logErrors, boomErrorHandler, errorHandler };
