export default function Sidebar() {
  return (
    <div className="w-60  bg-gray-800 text-white p-4">
      <ul className="space-y-4">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Dashboard
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          Portfolio
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Alerts</li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">News</li>
      </ul>
    </div>
  );
}
