import { Inter } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/app/components/HeaderSection/HeaderSection";
import { AppContextProvider } from "@/app/contexts/AppContexts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lorusso Inmobiliaria",
  description: "Somos una inmobiliaria familiar",
  icons: {
    icon: "/images/logo/logotype.svg",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <AppContextProvider>
        <body className={inter.className}>
          <HeaderSection/>
          {children}
        </body>
      </AppContextProvider>
    </html>
  );
}
