import { Epilogue, Red_Hat_Display } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
});

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  weight: ["600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "WaledJobs",
  description:
    "A simple job board application created as a task of QTec Solution Limited.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} ${redHatDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
