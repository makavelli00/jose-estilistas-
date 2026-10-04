// Bloque de contacto: icono en caja redondeada + contenido
export default function InfoBlock({ icon, iconClassName = 'text-gold', children }) {
    return (
        <article className="flex gap-6 items-start">
            <div className={`w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 ${iconClassName}`}>
                {icon}
            </div>
            {children}
        </article>
    );
}
