import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />

          <div className="flex-1">
            <Navbar />
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}