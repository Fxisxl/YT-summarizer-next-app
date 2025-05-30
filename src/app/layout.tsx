import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Header from "../components/Header";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI study Assistant",
  description: "AI study assistant for making life easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          {/* {session ? ( */}
          <div className="flex text-primary-foreground/80">
            {/* Sidebar */}
            <div className="bg-primary text-primary-foreground/80 max-w-[250px] h-screen overflow-y-auto md:min-w-[15rem]">
              <SideBar />
            </div>
            {/* ClientProvider - Notification */}
            <div className="bg-[#212121] flex-1 h-screen overflow-hidden relative">
              <Header />
              {children}
            </div>
          </div>
          {/* ) : (
            <SignIn />
          )} */}
        </SessionProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: { background: "#000000", color: "#ffffff" },
          }}
        />
      </body>
    </html>
  );
}
