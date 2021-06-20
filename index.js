import express from "express";
import config from "config";
import cors from "cors";
import tickers from "./routes/tickers.js";
const app = express();
app.use(cors());
app.use("/api/tickers", tickers);

const PORT = config.get("port") || 3900;
app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
