import { Scissors } from './icons';
import { BOOKSY_URL } from '../data/contenido';

// Tarjeta de servicio con foto de fondo. `destacado` muestra una etiqueta en vez del icono.
export default function ServiceCard({ titulo, descripcion, precio, etiquetaReserva, imagen, destacado }) {
    const variante = destacado
        ? 'hover:border-gold shadow-2xl shadow-gold/10'
        : 'hover:border-gold/80 shadow-xl';
    const capa = destacado
        ? 'bg-gradient-to-b from-black/80 via-black/70 to-zinc-900/90 group-hover:from-black/60'
        : 'bg-black/80 group-hover:bg-black/60';

    return (
        <article className={`card-dark relative rounded-card p-10 transition-all duration-500 group overflow-hidden bg-cover bg-center ${variante}`} style={{ backgroundImage: `url('${imagen}')` }}>
            <div className={`absolute inset-0 transition-colors duration-500 z-0 ${capa}`}></div>
            <div className="relative z-10">
                {destacado
                    ? <div className="bg-gold text-black text-2xs font-black px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-tighter shadow-md">{destacado}</div>
                    : <Scissors size={48} className="mb-6 text-gold" />}
                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">{titulo}</h3>
                <p className="text-gray-200 mb-6 font-medium drop-shadow-md">{descripcion}</p>
                <div className="pt-6 border-t border-white/20 flex justify-between items-center">
                    <span className="text-xl font-bold text-white drop-shadow-md">{precio}</span>
                    <a href={BOOKSY_URL} target="_blank" rel="noreferrer" aria-label={etiquetaReserva} className="inline-flex items-center min-h-tap text-gold font-bold group-hover:translate-x-2 transition-transform drop-shadow-md">Reservar →</a>
                </div>
            </div>
        </article>
    );
}
