import http from "./httpService";

const apiEndpoint = "/tickers";

function tickerUrl(ticker) {
  return `${apiEndpoint}/${ticker}`;
}

export function getTickerInfo(ticker) {
  return http.get(tickerUrl(ticker));
}

export function getTickerHistory(ticker) {
  return http.get(tickerUrl(ticker) + "/history");
}

export function getTickers(value) {
  return http.get(tickerUrl(value) + "/matching");
}
