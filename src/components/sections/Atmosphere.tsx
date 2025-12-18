"use client";

import { motion } from "framer-motion";
import PhotoFrame from "@/components/ui/PhotoFrame";

export default function Atmosphere() {
    return (
        <section className="py-24 md:py-32 px-6 max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
                {/* Columna de texto */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:w-1/3 space-y-8 order-2 md:order-1 text-center md:text-left"
                >
                    <div>
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-accent text-xs md:text-sm tracking-[0.3em] uppercase font-sans font-semibold mb-4 block"
                        >
                            Estética
                        </motion.span>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white"
                        >
                            El Espacio
                        </motion.h3>
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-12 h-[1px] bg-accent/50 mx-auto md:mx-0 origin-left"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="font-sans font-light text-muted leading-loose text-lg"
                    >
                        Un santuario de sombras y luces cálidas. Diseñado para perder la
                        noción del tiempo, donde cada rincón cuenta una historia susurrada.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-4"
                    >
                        <p className="font-serif text-2xl italic text-ruby-glow opacity-80">
                            "La noche empieza cuando cruzas la puerta."
                        </p>
                    </motion.div>
                </motion.div>

                {/* Grid de fotos con efecto collage */}
                <div className="md:w-2/3 h-[600px] relative order-1 md:order-2 w-full">
                    {/* Foto principal de fondo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="absolute top-0 right-0 w-[85%] h-[85%] z-0 grayscale hover:grayscale-0 transition-all duration-1000"
                    >
                        <PhotoFrame
                            label="Main Room"
                            alt="Sala principal del bar"
                            className="h-full w-full opacity-60 hover:opacity-100"
                        />
                    </motion.div>

                    {/* Foto detalle superpuesta */}
                    <motion.div
                        initial={{ opacity: 0, x: -30, y: 30 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="absolute bottom-0 left-0 w-[45%] h-[55%] z-10 shadow-2xl border border-white/5 bg-background"
                    >
                        <PhotoFrame
                            label="Detalle Textura"
                            alt="Detalle decorativo"
                            className="h-full w-full"
                        />
                    </motion.div>

                    {/* Marco decorativo dorado */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="absolute top-12 right-12 w-[85%] h-[85%] border border-accent/20 pointer-events-none z-20"
                    />
                </div>
            </div>
        </section>
    );
}