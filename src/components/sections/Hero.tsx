"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">

            {/* --- FONDO ATMOSFÉRICO ROJO --- */}
            <div className="absolute inset-0 bg-background z-0">
                {/* 1. Foco central rojo intenso (El alma del bar) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/40 blur-[120px] rounded-full mix-blend-screen" />

                {/* 2. Segundo foco más pequeño y brillante en el centro exacto */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-ruby-glow/20 blur-[80px] rounded-full" />

                {/* 3. Ruido granulado para textura (Evita que el degradado se vea digital y barato) */}
                <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
            </div>

            {/* --- CONTENIDO --- */}
            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <p className="text-accent text-xs md:text-sm tracking-[0.3em] uppercase font-sans font-semibold drop-shadow-md">
                        Est. 2025
                    </p>

                    {/* Título con sombra sutil roja para integrarlo */}
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground tracking-tight drop-shadow-[0_0_30px_rgba(255,0,0,0.15)]">
                        CHAKRA
                    </h1>

                    <p className="text-muted text-lg md:text-xl font-light font-sans max-w-lg mx-auto">
                        Cocktails & Lounge
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="pt-10"
                >
                    {/* Botón con borde rojizo sutil */}
                    <Link
                        href="/carta"
                        className="group relative px-10 py-4 bg-black/40 backdrop-blur-sm border border-primary/40 hover:border-ruby/50 text-foreground font-sans tracking-widest uppercase text-xs transition-all duration-500 overflow-hidden inline-block"
                    >
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">Ver Carta</span>

                        {/* Efecto de llenado rojo al pasar el ratón */}
                        <div className="absolute inset-0 bg-primary/60 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                    </Link>
                </motion.div>
            </div>

            {/* Indicador de Scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 text-white/20 animate-bounce"
            >
                <ChevronDown size={24} />
            </motion.div>
        </section>
    );
}