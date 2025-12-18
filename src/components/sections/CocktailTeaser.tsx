"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PhotoFrame from "@/components/ui/PhotoFrame";

const featuredCocktails = [
    {
        id: "Pornstar Martini",
        name: "Pornstar Martini",
        description: "Ginebra, hibisco infuso, limón siciliano y humo de romero.",
        image: "/pornstar_martini.png",
        label: "Signature"
    },
    {
        id: "mumbai-gold",
        name: "Espresso Martini",
        image: "/ab.jpeg",
        label: "Signature"
    },
    {
        id: "midnight-lotus",
        name: "Midnight Lotus",
        image: "/image2.png",
        label: "Dark Spirit"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

export default function CocktailTeaser() {
    return (
        <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto relative border-t border-primary/10">
            {/* Luz ambiental de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
                >
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-accent text-xs md:text-sm tracking-[0.3em] uppercase font-sans font-semibold mb-4 block"
                        >
                            Selección de Autor
                        </motion.span>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white"
                        >
                            La Alquimia
                        </motion.h3>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link
                            href="/carta"
                            className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors pb-1 border-b border-transparent hover:border-accent"
                        >
                            Carta Completa
                            <ArrowRight
                                size={14}
                                className="group-hover:translate-x-1 transition-transform text-accent"
                            />
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Grid de cócteles */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-12"
                >
                    {featuredCocktails.map((cocktail, index) => (
                        <motion.div
                            key={cocktail.id}

                            className="group cursor-pointer space-y-6 transition-transform duration-500 hover:scale-[1.02]"
                            style={{
                                marginTop: index === 1 ? '3rem' : '0'
                            }}
                            whileHover={{ y: -8 }}
                        >
                            <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl shadow-black/50">
                                <PhotoFrame
                                    src={cocktail.image}
                                    label={cocktail.label}
                                    alt={cocktail.name}
                                    className="h-full w-full"
                                />
                                <div className="absolute -inset-2 border border-transparent group-hover:border-accent/30 transition-all duration-700 pointer-events-none" />

                                {/* Brillo que aparece al hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-ruby/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            <div className="text-center md:text-left">
                                <h4 className="text-2xl font-serif text-white group-hover:text-ruby-glow transition-colors duration-500">
                                    {cocktail.name}
                                </h4>
                                <div className="w-8 h-[1px] bg-accent/30 my-3 mx-auto md:mx-0 group-hover:w-16 transition-all duration-500" />
                                <p className="text-muted text-sm font-light leading-relaxed">
                                    {cocktail.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}