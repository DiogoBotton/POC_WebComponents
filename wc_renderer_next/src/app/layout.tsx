import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renderizador de Web Components com Next Js",
  description: "Renderizando Web Components com Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
