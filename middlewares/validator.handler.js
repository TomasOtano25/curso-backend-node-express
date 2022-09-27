const boom = require('@hapi/boom');

// req.body
// req.params
// req.query

// middleware dinamicos
function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);

    if (error) {
      next(boom.badRequest(error));
    }

    next();
  };
}

module.exports = validatorHandler;
