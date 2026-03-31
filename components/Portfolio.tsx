"use client";

import { useState } from "react";

export default function Portfolio() {
  const [trades, setTrades] = useState([
    { name: "RELIANCE", qty: 10, buy: 2400, current: 2500 },
  ]);

  const [form, setForm] = useState({
    name: "",
    qty: "",
    buy: "",
  });

  const handleAddTrade = () => {
    if (!form.name || !form.qty || !form.buy) return;

    const newTrade = {
      name: form.name,
      qty: Number(form.qty),
      buy: Number(form.buy),
      current: Number(form.buy) + 50,
    };

    setTrades([...trades, newTrade]);

    setForm({ name: "", qty: "", buy: "" });
  };

  return (
    <div className="space-y-4">
      {/* Form */}
      <div className="flex gap-2">
        <input
          placeholder="Stock"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-2 rounded bg-gray-700 text-white"
        />

        <input
          placeholder="Qty"
          value={form.qty}
          onChange={(e) => setForm({ ...form, qty: e.target.value })}
          className="p-2 rounded bg-gray-700 text-white"
        />

        <input
          placeholder="Buy Price"
          value={form.buy}
          onChange={(e) => setForm({ ...form, buy: e.target.value })}
          className="p-2 rounded bg-gray-700 text-white"
        />

        <button onClick={handleAddTrade} className="bg-blue-500 px-4 rounded">
          Add
        </button>
      </div>

      {/* Trades */}
      {trades.map((trade, index) => {
        const pnl = (trade.current - trade.buy) * trade.qty;

        return (
          <div
            key={index}
            className="flex justify-between bg-gray-700 p-3 rounded"
          >
            <div>
              <p className="font-semibold">{trade.name}</p>
              <p className="text-sm text-gray-400">Qty: {trade.qty}</p>
            </div>

            <div className="text-right">
              <p>₹{trade.current}</p>
              <p className={pnl >= 0 ? "text-green-400" : "text-red-400"}>
                {pnl >= 0 ? "+" : ""}₹{pnl}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
