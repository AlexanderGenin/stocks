import http from "./httpService";

const apiEndpoint = "/tickers";

function tickerUrl(ticker) {
  return `${apiEndpoint}/${ticker}`;
}

export function getTickerInfo(ticker) {
  return http.get(tickerUrl(ticker));
}
