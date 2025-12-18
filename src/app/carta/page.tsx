"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: string;
    tags?: string[];
}

interface MenuCategory {
    id: string;
    title: string;
    items: MenuItem[];
}

interface MenuData {
    categories: MenuCategory[];
}

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export default function MenuPage() {
    const [menuData, setMenuData] = useState<MenuData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Cargar el JSON de menú
        fetch('/data/menu.json')
            .then(res => res.json())
            .then(data => {
                setMenuData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error cargando el menú:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-accent text-xl font-serif animate-pulse"
                >
                    Cargando carta...
                </motion.div>
            </div>
        );
    }

    if (!menuData) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-muted text-xl font-serif"
                >
                    Error al cargar la carta
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground pb-20 relative overflow-hidden">
            {/* Luz ambiental de fondo */}
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full pointer-events-none z-0" />

            {/* Contenido */}
            <div className="relative z-10">
                {/* Header fijo */}
                <motion.header
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="sticky top-0 z-50 bg-background/80 backdrop-blur-luxury border-b border-white/5 px-6 py-4 flex items-center justify-between"
                >
                    <Link
                        href="/"
                        className="text-muted hover:text-white transition-colors"
                        aria-label="Volver al inicio"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <span className="font-serif text-xl tracking-widest text-accent">
            CHAKRA
          </span>
                    <div className="w-5" /> {/* Espaciador */}
                </motion.header>

                {/* Contenido principal */}
                <main className="px-6 pt-8 max-w-2xl mx-auto">
                    {/* Título */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 space-y-2"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
                            Nuestra Carta
                        </h1>
                        <p className="text-muted text-sm italic">
                            Una selección de sabores místicos
                        </p>
                    </motion.div>

                    {/* Categorías y items */}
                    <div className="space-y-16">
                        {menuData.categories.map((category, catIndex) => (
                            <motion.section
                                key={category.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                            >
                                {/* Título de categoría */}
                                <h2 className="text-2xl font-serif text-ruby mb-6 border-b border-primary/30 pb-2 inline-block shadow-glow-ruby">
                                    {category.title}
                                </h2>

                                {/* Items de la categoría */}
                                <div className="space-y-8">
                                    {category.items.map((item, index) => (
                                        <motion.article
                                            key={item.id}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="group relative"
                                            whileHover={{ x: 8 }}
                                        >
                                            <div className="flex justify-between items-baseline mb-1">
                                                <h3 className="text-xl font-serif text-white group-hover:text-accent transition-colors duration-300">
                                                    {item.name}
                                                </h3>

                                                {/* Línea decorativa */}
                                                <div className="flex-grow mx-4 border-b border-white/10 border-dotted h-1 opacity-30 group-hover:opacity-50 transition-opacity" />

                                                <span className="text-lg font-serif text-accent">
                          {item.price}
                        </span>
                                            </div>

                                            <p className="text-muted text-sm font-light leading-relaxed max-w-[90%]">
                                                {item.description}
                                            </p>

                                            {/* Tags */}
                                            {item.tags && item.tags.length > 0 && (
                                                <div className="mt-2 flex gap-2 flex-wrap">
                                                    {item.tags.map((tag) => (
                                                        <motion.span
                                                            key={tag}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            whileHover={{ scale: 1.1 }}
                                                            className="text-[10px] uppercase tracking-wider text-accent/80 border border-accent/20 px-2 py-0.5 rounded-full"
                                                        >
                                                            {tag}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            )}
                                        </motion.article>
                                    ))}
                                </div>
                            </motion.section>
                        ))}
                    </div>
                </main>

                {/* Footer de la carta */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 text-center text-muted text-xs px-6 space-y-2"
                >
                    <p>Precios con IVA incluido.</p>
                    <p>Si tiene alguna alergia, por favor consulte a nuestro personal.</p>
                </motion.footer>
            </div>
        </div>
    );
}