import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToHash from "@/components/scroll-to-hash";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Malay Patra",
  description: "Portfolio of Malay (Quby)",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.className} antialiased`}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider delayDuration={0}>
            <Navbar />

            <div>
              {children}
            </div>

            <Footer />
          </TooltipProvider>
        </ThemeProvider>
        <ScrollToHash />
      </body>
    </html>
  );
}