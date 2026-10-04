// Botón redondo de red social del pie
export default function SocialLink({ href, label, children }) {
    return (
        <a href={href} target="_blank" rel="noreferrer" aria-label={`${label} (se abre en otra pestaña)`}
            className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center text-white hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 shadow-gold-glow">
            {children}
        </a>
    );
}
