// Texto pequeño en dorado que va encima de los títulos de sección
export default function Eyebrow({ children, className = '' }) {
    return <span className={`text-gold text-xs font-bold tracking-eyebrow uppercase ${className}`}>{children}</span>;
}
