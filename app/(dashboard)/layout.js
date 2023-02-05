import "../../styles/globals.css";
import LeftBar from "./LeftBar";
import Navbar from "./Navbar";
import RightBar from "./RightBar";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar />
        <main className="flex h-full bg-[#14171A]">
          <LeftBar />
          <div className="flex-[60%]">{children}</div>
          <RightBar />
        </main>
      </body>
    </html>
  );
}
