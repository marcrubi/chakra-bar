import Hero from "@/components/sections/Hero";
import CocktailTeaser from "@/components/sections/CocktailTeaser";
import Atmosphere from "@/components/sections/Atmosphere";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <Hero />

            {/* Sección de Cócteles Destacados */}
            <CocktailTeaser />

            {/* Sección de Atmósfera/Espacio */}
            <Atmosphere />

            {/* Sección de Contacto */}
            <Contact />

            {/* Footer */}
            <Footer />
        </main>
    );
}