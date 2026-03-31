import Chart from "@/components/Chart";
import AISignal from "@/components/AISignal";
import Portfolio from "@/components/Portfolio";
export default function Home() {
  const prices = [22450, 22500, 22480, 22550, 22600, 22580, 22650];
  const labels = ["9:15", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"];
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-gray-800 p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">Chart</h2>
        <Chart prices={prices} labels={labels} />
      </div>

      <div className="bg-gray-800 p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">AI Suggestion</h2>
        <AISignal prices={prices} />
      </div>

      <div className="col-span-3 bg-gray-800 p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-2">Portfolio</h2>
        <Portfolio />
      </div>
    </div>
  );
}
