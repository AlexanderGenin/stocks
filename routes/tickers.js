import yf from "yahoo-finance";
import express from "express";
import mongoUtil from "../utilities/mongoUtil.js";

const router = express.Router();

router.get("/:value/matching", async (req, res) => {
  try {
    const regex = new RegExp("^" + req.params.value, "i");
    const matchingTickers = await mongoUtil
      .getDb()
      .collection("tickers")
      .find({
        $or: [
          {
            ticker: { $regex: regex },
          },
        ],
      })
      .sort({ ticker: 1 })
      .limit(5)
      .toArray();

    if (!matchingTickers) res.status(404).send("Tickers not found");

    res.send(matchingTickers);
  } catch (e) {
    console.error();
  }
});

router.get("/:ticker", async (req, res) => {
  try {
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
      return res
        .status(404)
        .send("The ticker with the given ID was not found.");

    res.send(tickerData);
  } catch (e) {
    console.error();
  }
});

router.get("/:ticker/history", async (req, res) => {
  try {
    const tickerHistory = await yf.historical({
      symbol: req.params.ticker,
      from: new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
      to: new Date().toISOString().slice(0, 10),
      period: "d",
    });

    if (!tickerHistory)
      return res
        .status(404)
        .send("The ticker with the given ID was not found.");

    res.send(tickerHistory);
  } catch (e) {
    console.error();
  }
});

export default router;
