import yf from "yahoo-finance";
import express from "express";

const router = express.Router();

router.get("/:ticker", async (req, res) => {
  let ticker = await yf.quote({
    symbol: req.params.ticker,
    modules: ["price", "summaryDetail"], // optional; default modules.
  });

  if (!ticker)
    return res.status(404).send("The ticker with the given ID was not found.");

  res.send(ticker);
});

export default router;
