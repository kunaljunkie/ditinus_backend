const { createuser } = require("../controllers/login");
const { createResller, insertchart } = require("../controllers/reseller");
const requestLogger = require("../middlewares/reqReslogger");

const admin = require("express").Router();
admin.use(requestLogger);

admin.post("/create-user", createuser);
admin.post("/create-reseller", createResller);
admin.post("/create-chart", insertchart);

module.exports = admin;
