import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-60  bg-gray-800 text-white p-4">
      <ul className="space-y-4">
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          <Link href="/">Dashboard</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          <Link href="/alerts">Alerts</Link>
        </li>
        <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">
          <Link href="/news">News</Link>
        </li>
      </ul>
    </div>
  );
}
