import "../../styles/globals.css";

export default function authLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <div className=" bg-gray-400 h-screen flex justify-center items-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
