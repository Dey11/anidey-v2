import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import RecoilContextProvider from "../lib/recoil-context-provider";
import { Footer } from "@/components/footer/footer";
import LoginBanner from "@/components/header/LoginBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anidey: Watch Ad-free Anime Online",
  description:
    "Stream ad-free anime online. Supports a high quality player for enhanced experience.",
  category: "anime",
  creator: "Dey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami-u84cskk0s8s0k088scw00o48.anidey.fun/script.js"
          data-website-id="1ed74259-4b93-4cdc-bda6-e542fac37f36"
        ></script>
      </head>
      <SessionProvider>
        <RecoilContextProvider>
          <body className={`${inter.className} dark`}>
            <LoginBanner />
            <div className="absolute top-0 z-40 w-full">
              <Header />
            </div>
            {children}
            <Footer />
            <Toaster />
          </body>
        </RecoilContextProvider>
      </SessionProvider>
    </html>
  );
}
