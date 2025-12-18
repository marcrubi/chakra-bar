"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhotoFrameProps {
    src?: string;
    alt?: string;
    label?: string;
    className?: string;
    priority?: boolean;
}

export default function PhotoFrame({
                                       src,
                                       alt = "Imagen",
                                       label,
                                       className,
                                       priority = false
                                   }: PhotoFrameProps) {
    return (
        <div className={cn(
            "relative overflow-hidden bg-white/5 border border-white/10 group",
            className
        )}>
            {src ? (
                // Imagen real
                <>
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        priority={priority}
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 filter-cinematic"
                    />

                    {/* Overlay con gradiente */}
                    <div className="image-overlay" />
                </>
            ) : (
                // Placeholder cuando no hay imagen
                <>
                    {/* Patrón de fondo */}
                    <div className="absolute inset-0 opacity-[0.05] bg-grain" />

                    {/* Contenido del placeholder */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-muted/30 transition-all duration-500 group-hover:text-ruby/50 group-hover:scale-105">
            <span className="text-xs uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
              {label || "Imagen"}
            </span>
                    </div>
                </>
            )}

            {/* Textura de grano sutil sobre todo */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-grain" />
        </div>
    );
}