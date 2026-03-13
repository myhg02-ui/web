import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FYIS | Inicio",
  description: "Plataforma principal de FYIS con acceso rápido a bots y contacto"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}