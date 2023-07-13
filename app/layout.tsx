import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quiz app",
  description: "A simple quiz app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-900 container mx-auto p-4 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
