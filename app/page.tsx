export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-gray-800 p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Chart</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          Chart Coming Soon 📈
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-2">AI Suggestion</h2>
        <p className="text-gray-400">No data yet</p>
      </div>

      <div className="col-span-3 bg-gray-800 p-4 rounded-xl">
        <h2 className="text-lg font-semibold mb-2">Portfolio</h2>
        <p className="text-gray-400">No trades added</p>
      </div>
    </div>
  );
}
