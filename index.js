const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./src/routes/routes");
const logger = require("./src/servives/logging");
const MongoDB = require("./src/db/mongo");
require("dotenv").config();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const { getCountrieslist } = require("./src/servives/countries");

const limiter = rateLimit({
  windowMs: 10 * 1000,
  max: 10,
  message: "Too many requests from this IP, please try again later.",
});

// app.use(limiter);
app.use(cors());
app.use(helmet.xssFilter());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.json());
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use(`/api`, routes);

app.get("/health", async (req, res) => {
  res.status(200).send("server running");
});
app.get("/", async (req, res) => {
  res.status(200).send("server running");
});
MongoDB.connect()
.then(() => {
    getCountrieslist()
})
.catch((err) => {
  console.log("DATABASE CONNECTING ERROR", err);
});
  app
    .listen(process.env.PORT, () => {
      console.log(`Server Listning on: ${process.env.PORT}`);
    })




