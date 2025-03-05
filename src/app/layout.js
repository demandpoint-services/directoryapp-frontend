import { Inter, Roboto_Mono } from "next/font/google";
import "@fontsource/bebas-neue";
import "./globals.css";
import ThemeWrapper from "../components/ThemeWrapper"; // Import ThemeWrapper

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMonoFont = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Demand Point - Connecting Skilled Professionals with Clients",
  description:
    "Step into the world of seamless logistics and efficient transportation with our comprehensive range of maritime services. We provide and charter vessels for the coastal transportation of petroleum products, crude oil, and its derivatives, ensuring timely and reliable delivery of your cargo.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFont.variable}>
      <body className={`${interFont.variable} ${robotoMonoFont.variable}`}>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}
