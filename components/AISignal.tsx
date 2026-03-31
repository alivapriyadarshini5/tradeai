"use client";

export default function AISignal() {
  const signal = {
    action: "BUY",
    confidence: "High",
    reason: "Uptrend with higher highs",
  };

  return (
    <div className="space-y-2">
      <p>
        <span className="font-semibold">Signal:</span>{" "}
        <span className="text-green-400">{signal.action} 📈</span>
      </p>

      <p>
        <span className="font-semibold">Confidence:</span>{" "}
        {signal.confidence}
      </p>

      <p className="text-gray-400 text-sm">{signal.reason}</p>
    </div>
  );
}