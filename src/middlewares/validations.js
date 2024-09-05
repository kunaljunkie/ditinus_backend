const { querySchema, querySchemaforCode } = require('../servives/validationSchema');

const validateQuery = (req, res, next) => {
  const { error, value } = querySchema.validate(req.query);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  req.query = value;
  next();
};

const validateCode = (req, res, next) => {
  const { error, value } = querySchemaforCode.validate(req.params);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  req.query = value;
  next();
};

module.exports = {validateQuery,validateCode};