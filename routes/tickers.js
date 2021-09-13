import yf from "yahoo-finance";
import express from "express";
import mongoUtil from "../utilities/mongoUtil.js";

const router = express.Router();

router.get("/:value/matching", async (req, res) => {
  const matchingTickers = await mongoUtil
    .getDb()
    .collection("tickers")
    .find({
      Ticker: { $regex: new RegExp("^" + req.params.value) },
    })
    .sort({ Ticker: 1 })
    .limit(5)
    .toArray();

  res.send(matchingTickers);
});

router.get("/:ticker", async (req, res) => {
  const tickerData = await yf.quote({
    symbol: req.params.ticker,
    modules: [
      "recommendationTrend",
      "summaryDetail",
      "earnings",
      "calendarEvents",
      "price",
      "defaultKeyStatistics",
      "summaryProfile",
      "financialData",
    ],
  });

  if (!tickerData)
    return res.status(404).send("The ticker with the given ID was not found.");

  res.send(tickerData);
});

router.get("/:ticker/history", async (req, res) => {
  const tickerHistory = await yf.historical({
    symbol: req.params.ticker,
    from: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
    to: new Date().toISOString().slice(0, 10),
    period: "d",
  });

  if (!tickerHistory)
    return res.status(404).send("The ticker with the given ID was not found.");

  res.send(tickerHistory);
});

export default router;
