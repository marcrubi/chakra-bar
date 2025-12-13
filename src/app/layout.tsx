import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

// Títulos elegantes
const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
});

// Texto legible
const lato = Lato({
    subsets: ["latin"],
    weight: ["300", "400", "700"], // Importante el 300 para elegancia
    variable: "--font-sans",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Chakra | Cocktail Bar",
    description: "Experience the essence of luxury cocktails.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
        <body
            className={`${lato.variable} ${playfair.variable} font-sans bg-background text-foreground antialiased selection:bg-primary selection:text-white`}
        >
        {children}
        </body>
        </html>
    );
}