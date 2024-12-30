import "./globals.css";



export const metadata = {
  title: "CV Qurat Ul Ain Siddique",
  description: "CV made with Next Js.!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
