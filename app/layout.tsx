import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./context/chakra-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notation",
  description: "Elevate Your Math Mastery: Dive Into Our Dynamic Quiz Universe",
  icons:[
    {
      url: "/Favicon-dark.svg",
      media: '(prefers-color-scheme: dark)',
    },
    {
      url: "/Favicon-light.svg",
      media: '(prefers-color-scheme: light)',
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
