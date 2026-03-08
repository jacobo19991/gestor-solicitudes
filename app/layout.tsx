import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; // ¡No olvides este import!

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gestor de Solicitudes",
  description: "Mi primera aplicación en Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Barra de Navegación 🧭 */}
        <nav className="flex justify-center gap-6 p-6 bg-blue-50 border-b">
          <Link href="/" className="text-blue-600 font-medium hover:text-blue-800">Inicio</Link>
          <Link href="/login" className="text-blue-600 font-medium hover:text-blue-800">Login</Link>
          <Link href="/register" className="text-blue-600 font-medium hover:text-blue-800">Registro</Link>
          <Link href="/solicitudes" className="text-blue-600 font-medium hover:text-blue-800">Solicitudes</Link>
        </nav>

        {/* El contenido de cada página aparece aquí */}
        <main className="p-8">
          {children}
        </main>
      </body>
    </html>
  );
}