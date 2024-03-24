import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { getDocuments } from "@/lib/doc";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DocuCraft - A documentation website by protocol",
  description: "A documentation website by protocol",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments()
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header docs={allDocuments} />
        {children}
      </body>
    </html>
  );
}
