import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoUtil from "./utilities/mongoUtil.js";
import tickers from "./routes/tickers.js";

dotenv.config();

mongoUtil.connectToServer(function () {
  const app = express();
  app.use(cors());
  app.use("/api/tickers", tickers);

  const PORT = process.env.PORT || 3900;
  app.listen(PORT, () =>
    console.log(`App has been started on port ${PORT}...`)
  );
});
