"use client";

import { useState } from "react";

export default function Alerts() {
  const [price, setPrice] = useState(22650);
  const [target, setTarget] = useState("");
  const [message, setMessage] = useState("");

  const handleSetAlert = () => {
    if (!target) return;

    if (price >= Number(target)) {
      setMessage(`🔔 Alert! Price crossed ${target}`);
    } else {
      setMessage("Waiting for price...");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          placeholder="Set target price"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white"
        />

        <button onClick={handleSetAlert} className="bg-blue-500 px-4 rounded">
          Set Alert
        </button>
      </div>

      <p className="text-yellow-400">{message}</p>
    </div>
  );
}
