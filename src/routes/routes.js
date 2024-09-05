
const { fetchCountrybyName, fetchCountrybyCode } = require("../controllers/countries");
// const authenticateToken = require("../middlewares/authentication"); // middleware created for JWT auth
const requestLogger = require("../middlewares/reqReslogger"); // request loggers
const { validateQuery, validateCode } = require("../middlewares/validations"); // JOI validation

const router = require("express").Router();
router.use(requestLogger);
router.get("/countries",validateQuery, fetchCountrybyName);
router.get("/countries/:country_code",validateCode,fetchCountrybyCode)


module.exports = router;
