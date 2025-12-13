import Hero from "@/components/sections/Hero";
import Link from "next/link";
import { ArrowRight, Instagram, MapPin } from "lucide-react";

// Componente auxiliar para los huecos de las fotos (Placeholders de Lujo)
const PhotoPlaceholder = ({ label, className }: { label?: string; className?: string }) => (
    <div className={`relative overflow-hidden bg-white/5 border border-white/10 group ${className}`}>
        {/* Patrón de fondo sutil para que no se vea plano */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* Icono/Texto central */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted/30 transition-all duration-500 group-hover:text-ruby/50 group-hover:scale-105">
      <span className="text-xs uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
        {label || "Imagen"}
      </span>
        </div>

        {/* Efecto hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
);

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-ruby selection:text-white">
            <Hero />

            {/* --- SECCIÓN 1: FILOSOFÍA (Texto + Foto Principal) --- */}
            <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 order-2 md:order-1">
                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                            Donde el <span className="text-ruby italic">misticismo</span> <br />
                            encuentra el sabor.
                        </h2>
                        <p className="text-muted font-light leading-relaxed text-lg">
                            Chakra no es solo una coctelería. Es un punto de encuentro entre la elegancia moderna y la tradición sensorial.
                            <br /><br />
                            Diseñado en tonos rojos y oscuros, nuestro espacio invita a la desconexión total. Cada cóctel está pensado para equilibrar los sentidos.
                        </p>

                        {/* Firma o detalle decorativo */}
                        <div className="h-px w-20 bg-accent/50" />
                    </div>

                    {/* Hueco para FOTO: Interior del bar o Bartender */}
                    <div className="order-1 md:order-2 h-[500px] md:h-[600px] w-full relative">
                        {/* Marco decorativo desplazado */}
                        <div className="absolute inset-0 border border-ruby/20 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 z-0" />
                        <PhotoPlaceholder label="Foto Interior / Bartender" className="h-full w-full z-10 relative bg-zinc-900" />
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN 2: COCKTAIL TEASER (3 Columnas) --- */}
            <section className="py-24 bg-white/[0.02] border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-end mb-12">
                        <h3 className="text-3xl font-serif">La Alquimia</h3>
                        <Link href="/carta" className="group flex items-center gap-2 text-sm uppercase tracking-widest text-accent hover:text-white transition-colors">
                            Ver Menú Completo
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group cursor-pointer">
                            <PhotoPlaceholder label="Cocktail Signature" className="aspect-[3/4] mb-6 rounded-sm" />
                            <h4 className="text-xl font-serif text-white group-hover:text-ruby transition-colors">El Chakra Rojo</h4>
                            <p className="text-muted text-sm mt-2">Ginebra, hibisco, limón y humo.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="group cursor-pointer">
                            <PhotoPlaceholder label="Cocktail Gold" className="aspect-[3/4] mb-6 rounded-sm" />
                            <h4 className="text-xl font-serif text-white group-hover:text-ruby transition-colors">Mumbai Gold</h4>
                            <p className="text-muted text-sm mt-2">Whisky, cúrcuma y miel especiada.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="group cursor-pointer">
                            <PhotoPlaceholder label="Cocktail Detail" className="aspect-[3/4] mb-6 rounded-sm" />
                            <h4 className="text-xl font-serif text-white group-hover:text-ruby transition-colors">Midnight Lotus</h4>
                            <p className="text-muted text-sm mt-2">Vodka negro y lima kaffir.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN 3: ATMÓSFERA (Grid Asimétrico) --- */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-ruby text-xs tracking-[0.3em] uppercase block mb-3">Estética</span>
                    <h3 className="text-4xl font-serif">El Espacio</h3>
                </div>

                {/* Grid estilo "Bento" o Masonry simple */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
                    {/* Foto Grande Izquierda */}
                    <div className="md:col-span-7 h-[300px] md:h-full">
                        <PhotoPlaceholder label="Ambiente General (Wide)" className="h-full w-full" />
                    </div>

                    {/* Columna Derecha con 2 fotos */}
                    <div className="md:col-span-5 flex flex-col gap-4 h-full">
                        <div className="h-[300px] md:h-1/2">
                            <PhotoPlaceholder label="Detalle Decoración" className="h-full w-full" />
                        </div>
                        <div className="h-[300px] md:h-1/2 bg-ruby/5 flex flex-col items-center justify-center border border-ruby/10 p-8 text-center">
                            <p className="font-serif text-xl italic text-ruby/80 mb-4">La noche empieza cuando cruzas la puerta.</p>
                            <div className="w-10 h-px bg-ruby/30" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER SIMPLIFICADO --- */}
            <footer className="border-t border-white/10 bg-black pt-20 pb-10 px-6">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-6xl font-serif text-white/10 select-none">CHAKRA</h2>

                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-sm tracking-widest text-muted">
                        <a href="#" className="hover:text-ruby transition-colors flex items-center justify-center gap-2">
                            <Instagram size={18} /> @chakrabar
                        </a>
                        <span className="flex items-center justify-center gap-2">
              <MapPin size={18} /> Calle del Bar, 123, Ciudad
            </span>
                    </div>

                    <p className="text-white/20 text-xs pt-12">
                        © 2025 Chakra Cocktail Bar. Todos los derechos reservados.
                    </p>
                </div>
            </footer>
        </main>
    );
}