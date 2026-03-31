export default function AISignal({ prices }: any) {
  const last = prices[prices.length - 1];
  const prev = prices[prices.length - 2];
  const isUptrend = last > prev;
  return <div>Signal: {isUptrend ? "BUY 📈" : "SELL 📉"}</div>;
}
