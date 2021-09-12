import express from "express";
import constant from "./configs/constant";
import Logger from "./configs/logger";
import db from "./configs/connectDB";
import cors from "cors";
import bodyParser from "body-parser";

import requestLogs from "./middlewares/requestLogs";

const app = express();

db.authenticate()
  .then(() => Logger.info("Database connected..."))
  .catch((err) => Logger.error("Error: " + err));

app.use(requestLogs);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json());

app.get("/healthz", (req, res) => {
  Logger.info("OK !!!");
  res.status(200).send("OK !!!");
});

app.listen(constant.PORT, () => {
  Logger.info(`Server is running @ PORT ${constant.PORT}`);
});

const server = require("http").Server(app);

export { app, server };
