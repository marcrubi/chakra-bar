"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, ExternalLink } from "lucide-react";

const contactItems = [
    {
        icon: MapPin,
        title: "Ubicación",
        content: (
            <>
                <p className="text-muted font-light leading-relaxed">
                    Carrer de Sant Magí, 40<br />
                    Santa Catalina, Palma
                </p>
                <a
                    href="https://www.google.es/maps/place/Chakra/@39.5705616,2.6351267,17z/data=!3m1!4b1!4m6!3m5!1s0x12979267e1020645:0x3b97f1a7d3c1c58f!8m2!3d39.5705616!4d2.6377016!16s%2Fg%2F11c523vg67?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent mt-4 border-b border-accent/20 pb-1 hover:border-accent transition-colors"
                >
                    Ver en Mapa <ExternalLink size={10} />
                </a>
            </>
        )
    },
    {
        icon: Clock,
        title: "Horario",
        content: (
            <div className="text-muted font-light leading-relaxed space-y-1">
                <div className="flex justify-between gap-8 border-b border-white/5 pb-2 mb-2">
                    <span>Miércoles — Domingo</span>
                    <span className="text-white">19:00 — 03:00</span>
                </div>
            </div>
        )
    },
    {
        icon: Mail,
        title: "Privado y Eventos",
        content: (
            <>
                <p className="text-muted font-light mb-4">
                    Reservas exclusivas para nuestra sala secreta.
                </p>
                <a
                    href="mailto:reservas@chakra.bar"
                    className="text-2xl font-serif text-white hover:text-ruby-glow transition-colors border-b border-white/10 hover:border-ruby/50 pb-1 inline-block"
                >
                    reservas@chakra.bar
                </a>
            </>
        )
    }
];

export default function Contact() {
    return (
        <section className="relative py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-primary/10">
            {/* Luz ambiental sutil */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/15 blur-[150px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
          <span className="text-accent text-xs md:text-sm tracking-[0.3em] uppercase font-sans font-semibold mb-4 block">
            Encuéntranos
          </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                        Visítanos
                    </h2>
                    <p className="text-muted text-lg font-light max-w-2xl mx-auto">
                        Un lugar donde la noche cobra vida. Te esperamos en el corazón de Santa Catalina.
                    </p>
                </motion.div>

                {/* Grid de información */}
                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {contactItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="group relative"
                            >
                                {/* Borde decorativo que aparece al hover */}
                                <div className="absolute -inset-4 border border-transparent group-hover:border-accent/20 transition-all duration-700 pointer-events-none rounded-sm" />

                                <div className="relative space-y-6 text-center md:text-left">
                                    {/* Icono */}
                                    <div className="flex justify-center md:justify-start">
                                        <div className="w-12 h-12 rounded-full bg-primary/20 border border-accent/30 flex items-center justify-center group-hover:bg-primary/30 group-hover:border-accent/50 transition-all duration-500">
                                            <Icon className="text-accent" size={20} />
                                        </div>
                                    </div>

                                    {/* Título */}
                                    <h3 className="text-2xl font-serif text-white group-hover:text-accent transition-colors duration-500">
                                        {item.title}
                                    </h3>

                                    {/* Divider */}
                                    <div className="w-12 h-[1px] bg-accent/30 mx-auto md:mx-0 group-hover:w-20 transition-all duration-500" />

                                    {/* Contenido */}
                                    <div>{item.content}</div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Frase final */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center mt-20"
                >
                    <p className="font-serif text-3xl md:text-4xl italic text-ruby-glow/80 max-w-3xl mx-auto">
                        "Cada visita es una historia que merece ser contada."
                    </p>
                </motion.div>
            </div>
        </section>
    );
}