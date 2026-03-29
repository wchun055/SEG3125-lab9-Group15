import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { NavProvider } from "./context/NavContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JZ Styles",
  description: "JZ Styles Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <NavProvider>
            {children}
          </NavProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
