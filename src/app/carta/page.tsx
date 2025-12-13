"use client";

import { motion } from "framer-motion";
import { menuData } from "@/data/menu";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MenuPage() {
    return (
        // 1. Añadimos 'relative' y 'overflow-hidden' al contenedor principal
        <div className="min-h-screen bg-background text-foreground pb-20 relative overflow-hidden">

            {/* --- NUEVO: Luz ambiental roja fija --- */}
            {/* Se coloca aquí para que esté "detrás" de todo lo demás */}
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none z-0" />

            {/* --- NUEVO: Wrapper de contenido --- */}
            {/* Todo el contenido visible debe ir dentro de este div con 'relative z-10' para estar encima de la luz */}
            <div className="relative z-10">

                {/* --- CABECERA DE LA CARTA --- */}
                <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-muted hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <span className="font-serif text-xl tracking-widest text-accent">
            CHAKRA
          </span>
                    <div className="w-5" /> {/* Espaciador para centrar el logo */}
                </header>

                {/* --- CONTENIDO --- */}
                <main className="px-6 pt-8 max-w-2xl mx-auto">
                    {/* Título de la página */}
                    <div className="text-center mb-12 space-y-2">
                        <h1 className="text-4xl font-serif text-white">Nuestra Carta</h1>
                        <p className="text-muted text-sm italic">
                            Una selección de sabores místicos
                        </p>
                    </div>

                    {/* Iteramos por categorías */}
                    <div className="space-y-16">
                        {menuData.map((category, catIndex) => (
                            <section key={category.title}>

                                {/* --- CAMBIO: Título de Categoría en Rojo Rubí --- */}
                                <h2 className="text-2xl font-serif text-ruby mb-6 border-b border-primary/30 pb-2 inline-block shadow-[0_10px_20px_-10px_rgba(220,20,60,0.2)]">
                                    {category.title}
                                </h2>

                                <div className="space-y-8">
                                    {category.items.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            className="group relative"
                                        >
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h3 className="text-xl font-serif text-white group-hover:text-accent transition-colors duration-300">
                                                    {item.name}
                                                </h3>
                                                {/* Línea punteada decorativa entre nombre y precio */}
                                                <div className="flex-grow mx-4 border-b border-white/10 border-dotted h-1 opacity-30" />
                                                <span className="text-lg font-serif text-accent">
                          {item.price}
                        </span>
                                            </div>

                                            <p className="text-muted text-sm font-light leading-relaxed max-w-[90%]">
                                                {item.description}
                                            </p>

                                            {/* Etiquetas (Tags) si existen */}
                                            {item.tags && (
                                                <div className="mt-2 flex gap-2">
                                                    {item.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-[10px] uppercase tracking-wider text-accent/80 border border-accent/20 px-2 py-0.5 rounded-full"
                                                        >
                              {tag}
                            </span>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </main>

                {/* Footer simple de la carta */}
                <footer className="mt-20 text-center text-muted text-xs px-6">
                    <p>Precios con IVA incluido.</p>
                    <p>Si tiene alguna alergia, por favor consulte a nuestro personal.</p>
                </footer>

            </div> {/* Cierre del wrapper z-10 */}
        </div>
    );
}