import "./globals.css";
import "./assets/css/tailwind.css";
import "./assets/css/materialdesignicons.min.css";
import { Tajawal } from "next/font/google";

const league_Spartan = Tajawal({
  subsets: ["latin"],
  weight: ["300", "400", "500", "200", "700", "800", "900"],
  display: "swap",
  variable: "--font-league_Spartan",
});

export const metadata = {
  title: "Hously - React Next Js Real Estate Template",
  description: "Hously React Next Js Real Estate Template",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="RTL">
      <body className={`${league_Spartan.className} dark:bg-slate-900`}>
        {children}
      </body>
    </html>
  );
}
