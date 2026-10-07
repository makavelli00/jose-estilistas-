import { Clock } from './icons';

// Una línea de la carta: nombre · · · precio, con duración y descripción debajo
function PriceRow({ nombre, precio, duracion, descripcion }) {
    return (
        <article>
            <div className="flex items-baseline w-full">
                <span className="text-lg md:text-xl font-semibold text-gray-200">{nombre}</span>
                <div className="menu-dots" aria-hidden="true"></div>
                <span className="text-xl font-bold text-gold whitespace-nowrap">{precio}</span>
            </div>
            <div className="flex items-center gap-4 mt-1">
                <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} /> {duracion}</span>
                {descripcion && <span className="text-sm text-gray-400">{descripcion}</span>}
            </div>
        </article>
    );
}

export default function MenuCategory({ categoria, servicios }) {
    return (
        <div>
            <h4 className="text-2xl font-bold text-gold border-b border-gray-800 pb-4 mb-6 uppercase tracking-wider">{categoria}</h4>
            <div className="space-y-6">
                {servicios.map((s) => <PriceRow key={s.nombre} {...s} />)}
            </div>
        </div>
    );
}
