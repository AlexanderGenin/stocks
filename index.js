import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoUtil from "./utilities/mongoUtil.js";
import tickers from "./routes/tickers.js";
import path from "path";

dotenv.config();

mongoUtil.connectToServer(function () {
  const app = express();
  app.use(cors());
  app.use("/api/tickers", tickers);

  const PORT = process.env.PORT || 3900;
  app.listen(PORT, () =>
    console.log(`App has been started on port ${PORT}...`)
  );

  const __dirname = path.resolve();

  // Serve static files from the React frontend app
  app.use(express.static(path.join(__dirname, "../client/build")));

  // AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../client/build/index.html"));
  });
});
