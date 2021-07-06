import yf from "yahoo-finance";
import express from "express";

const router = express.Router();

// router.get("/tickers", async (req, res) => {
//   const tickers = await db.collection("inventory").find({});

//   res.send(tickers);
// });

router.get("/:ticker", async (req, res) => {
  const tickerData = await yf.quote({
    symbol: req.params.ticker,
    modules: ["summaryDetail", "price"],
  });

  if (!tickerData)
    return res.status(404).send("The ticker with the given ID was not found.");

  res.send(tickerData);
});

router.get("/:ticker/history", async (req, res) => {
  const tickerData = await yf.historical({
    symbol: req.params.ticker,
    from: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    to: new Date().toISOString().slice(0, 10),
    period: "d",
  });

  if (!tickerData)
    return res.status(404).send("The ticker with the given ID was not found.");

  res.send(tickerData);
});

export default router;
