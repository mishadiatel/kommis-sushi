import type { Metadata } from "next";
import "./globals.css";
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  robots: "index, follow",
  icons: {
    icon: "/img/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.lang}>
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
