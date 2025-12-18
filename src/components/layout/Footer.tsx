"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black pt-32 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Luz ambiental */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent/15 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-12 relative z-10">
                {/* Logo grande decorativo */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[12vw] md:text-[8vw] font-serif text-white/5 leading-none select-none hover:text-white/10 transition-colors duration-700"
                >
                    CHAKRA
                </motion.h2>

                {/* Navegación */}
                <motion.nav
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-8 md:gap-16 items-center text-xs tracking-[0.2em] uppercase text-muted font-light"
                >
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05, color: "rgb(197, 160, 89)" }}
                        transition={{ duration: 0.2 }}
                        className="hover:text-accent transition-colors"
                    >
                        Política de Privacidad
                    </motion.a>

                    <motion.a
                        href="https://www.instagram.com/chakrabarmallorca/?hl=es"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2 text-white hover:text-ruby-glow transition-colors border border-white/10 px-6 py-3 rounded-full hover:border-ruby/30"
                    >
                        <Instagram size={16} />
                        Instagram
                    </motion.a>

                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.05, color: "rgb(197, 160, 89)" }}
                        transition={{ duration: 0.2 }}
                        className="hover:text-accent transition-colors"
                    >
                        Aviso Legal
                    </motion.a>
                </motion.nav>

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-white/20 text-[10px] tracking-widest pt-8"
                >
                    © 2025 PALMA DE MALLORCA
                </motion.p>
            </div>
        </footer>
    );
}