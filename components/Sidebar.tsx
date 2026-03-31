export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-800 text-white p-4">
      <ul className="space-y-4">
        <li className="hover:text-blue-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-400 cursor-pointer">Portfolio</li>
        <li className="hover:text-blue-400 cursor-pointer">Alerts</li>
        <li className="hover:text-blue-400 cursor-pointer">News</li>
      </ul>
    </div>
  );
}