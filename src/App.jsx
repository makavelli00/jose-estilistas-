import { useRef } from 'react';
import { BOOKSY_URL, MAPS_URL, resenas, serviciosDestacados, carta, horario } from './data/contenido';
import { ArrowRight, Star, CheckCircle, Calendar, MapPin, Clock, Banknote, AlertCircle, MessageCircle, Instagram, Facebook } from './components/icons';
import Eyebrow from './components/Eyebrow';
import ReviewCard from './components/ReviewCard';
import ServiceCard from './components/ServiceCard';
import MenuCategory from './components/MenuCategory';
import InfoBlock from './components/InfoBlock';
import SocialLink from './components/SocialLink';
import useAnimaciones from './useAnimaciones';

const metricasHero = [
    { valor: '15+', etiqueta: 'Años de oficio' },
    { valor: '226+', etiqueta: 'Clientes satisfechos' },
];

const metricasVerificables = [
    { titulo: 'Valoración Google:', valor: '5.0 Estrellas' },
    { titulo: 'Reseñas reales:', valor: '+226 Clientes' },
    { titulo: 'Trayectoria:', valor: '+15 años de oficio' },
    { titulo: 'Año de fundación:', valor: '2012' },
];

const nuevaPestana = <span className="sr-only">(se abre en otra pestaña)</span>;

export default function App() {
    const raiz = useRef(null);
    useAnimaciones(raiz);

    return (
        <div ref={raiz} className="bg-surface text-gray-200 min-h-screen relative font-sans">
            <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-gold focus:text-black focus:px-6 focus:py-3 focus:font-bold">Saltar al contenido</a>

            {/* Encabezado y Navegación Principal */}
            <header className="absolute w-full top-0 z-50 pt-4">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
                    <div className="flex justify-between items-center h-28 md:h-48">
                        <div className="flex-shrink-0 flex items-center">
                            <img src="/logo2.png" alt="Logo José Estilistas Peluquería y Estética" className="h-20 md:h-40 w-auto object-contain" />
                        </div>
                        <div className="hidden md:flex space-x-12 mx-auto uppercase tracking-widest text-xs font-semibold">
                            <a href="#servicios" className="inline-flex items-center min-h-tap text-gray-400 hover:text-gold transition-colors">Servicios</a>
                            <a href="#contacto" className="inline-flex items-center min-h-tap text-gray-400 hover:text-gold transition-colors">Contacto</a>
                        </div>
                        <a href={BOOKSY_URL} target="_blank" rel="noreferrer" className="inline-flex items-center min-h-tap border border-gold text-gold px-8 py-2.5 font-bold text-xs hover:bg-gold hover:text-black transition-colors uppercase tracking-label">
                            Reservar
                        </a>
                    </div>
                </nav>
            </header>

            {/* Contenido Principal Semántico */}
            <main id="contenido" tabIndex={-1} className="focus:outline-none">
                {/* Hero Section */}
                <section id="inicio" className="relative pt-40 pb-16 md:pt-56 xl:pt-48 lg:pb-24 overflow-hidden min-h-[90vh] flex flex-col justify-center border-b border-white/5" aria-label="Inicio">
                    <div className="absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074" alt="" className="w-full h-full object-cover opacity-30" />
                        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-transparent to-surface"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 w-full flex flex-col items-center">
                        <div className="flex flex-col items-start w-fit">
                            <div className="flex items-center gap-4 mb-8">
                                <div data-hero="linea" className="w-16 h-px bg-gold origin-left"></div>
                                <Eyebrow data-hero="eyebrow">Jerez de la Frontera · Est. 2012</Eyebrow>
                            </div>

                            <h1 data-hero="titulo" className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
                                <span className="text-white block">Arte</span>
                                <span className="text-gold block">En Cada</span>
                                <span className="text-white block">Corte</span>
                            </h1>

                            <p data-hero="texto" className="font-serif italic text-xl md:text-3xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                                Donde la precisión se convierte en expresión. Tu imagen, elevada a una forma de arte.
                            </p>

                            <div data-hero="botones" className="flex flex-col sm:flex-row gap-6 mb-20">
                                <a href={BOOKSY_URL} target="_blank" rel="noreferrer" className="bg-gold text-black px-8 py-4 font-bold tracking-label uppercase hover:bg-white transition-colors flex items-center justify-center gap-2 text-xs w-fit">
                                    Reservar Cita <ArrowRight size={16} />
                                </a>
                                <a href="#servicios" className="border border-white/30 text-white px-8 py-4 font-bold tracking-label uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center text-xs w-fit">
                                    Ver Servicios
                                </a>
                            </div>
                        </div>

                        <div data-hero="metricas" className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-3xl w-full">
                            {metricasHero.map((m) => (
                                <div key={m.etiqueta}>
                                    <div className="text-4xl md:text-5xl text-gold mb-2 font-black tracking-tighter">{m.valor}</div>
                                    <div className="text-2xs md:text-xs tracking-label uppercase text-gray-400">{m.etiqueta}</div>
                                </div>
                            ))}
                            <div className="col-span-2 md:col-span-1">
                                <div className="text-4xl md:text-5xl text-gold mb-2 font-black tracking-tighter flex items-center gap-2">
                                    <Star size={32} fill="currentColor" className="lucide lucide-star" /> 5.0
                                </div>
                                <div className="text-2xs md:text-xs tracking-label uppercase text-gray-400">Valoración media</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Proof Dinámico */}
                <section className="py-16 bg-zinc-950 border-y border-gray-900" aria-label="Testimonios y Reseñas">
                    <div className="max-w-7xl mx-auto px-4">
                        <div data-revelar-grupo className="grid md:grid-cols-3 gap-10">
                            {resenas.map((r) => <ReviewCard key={r.inicial} {...r} />)}
                        </div>
                    </div>
                </section>

                {/* Sección GEO Optimizada (Preguntas Frecuentes para IA) */}
                <section id="autoridad" className="py-24 bg-surface border-b border-white/5 relative" aria-label="Por qué elegirnos - Preguntas Frecuentes">
                    <div className="max-w-4xl mx-auto px-4 relative z-10">
                        <div data-revelar className="text-center mb-16">
                            <Eyebrow className="mb-4 block">Autoridad Local</Eyebrow>
                            <h2 className="text-4xl md:text-5xl font-bold text-white">¿Por qué elegir José Estilistas?</h2>
                        </div>

                        <div className="space-y-16">
                            <article data-revelar>
                                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">¿Por qué José Estilistas es considerada la mejor barbería de Jerez de la Frontera?</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">José Estilistas destaca en Jerez de la Frontera por combinar la tradición del oficio barbero con las técnicas más vanguardistas de corte masculino. Fundada en 2012, nuestra clínica estética capilar garantiza resultados de máxima precisión gracias a más de quince años de experiencia y un entorno climatizado exclusivo.</p>
                                <div className="bg-surface-raised border border-white/10 rounded-2xl p-6">
                                    <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Métricas Verificables</h4>
                                    <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
                                        {metricasVerificables.map((m) => (
                                            <li key={m.titulo} className="flex items-center gap-3"><CheckCircle size={16} className="text-gold" /> <strong>{m.titulo}</strong> {m.valor}</li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Servicios */}
                <section id="servicios" className="py-24 max-w-7xl mx-auto px-4" aria-label="Nuestros Servicios">
                    <div data-revelar className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-white mb-6">Excelencia en cada detalle</h2>
                        <div className="w-24 h-1 bg-gold-gradient mx-auto mb-6"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">"En José Estilistas, combinamos la técnica clásica con las tendencias más vanguardistas."</p>
                    </div>

                    <div data-revelar-grupo className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {serviciosDestacados.map((s) => <ServiceCard key={s.titulo} {...s} />)}
                    </div>

                    {/* Carta de Servicios Completa */}
                    <div data-revelar className="max-w-4xl mx-auto card-dark p-8 md:p-12 rounded-panel shadow-2xl">
                        <div className="text-center mb-12">
                            <h3 className="text-4xl font-bold text-gold mb-2">Carta de Servicios</h3>
                            <p className="text-gray-400 tracking-widest uppercase text-sm">Reserva online sin esperas</p>
                        </div>

                        <div className="space-y-12">
                            {carta.map((c) => <MenuCategory key={c.categoria} {...c} />)}
                        </div>

                        <div className="mt-12 text-center">
                            <a href={BOOKSY_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gold-gradient text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                                <Calendar size={16} /> RESERVAR MI HORA AHORA
                            </a>
                        </div>
                    </div>
                </section>

                {/* Ubicación y Mapa */}
                <section id="contacto" className="py-24 bg-zinc-950" aria-label="Ubicación y Contacto">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div data-revelar className="space-y-10">
                                <h2 className="text-5xl font-bold text-white leading-tight">Encuéntranos en <br /><span className="text-gold">Jerez de la Frontera</span></h2>

                                <div className="space-y-6">
                                    <InfoBlock icon={<MapPin />}>
                                        <div>
                                            <h3 className="font-sans text-white font-bold text-xl mb-1 tracking-tight">Nuestra Ubicación</h3>
                                            <p className="text-gray-400 text-lg">Plaza de Nicaragua Local 1A</p>
                                            <p className="text-gray-400 font-medium italic">Parque San Joaquín</p>
                                            <p className="text-gray-400">11407, Jerez de la Frontera, Cádiz</p>
                                            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center min-h-tap mt-1 text-gold font-bold border-b border-gold/30 pb-1 hover:border-gold transition-all">Ver en Google Maps → {nuevaPestana}</a>
                                        </div>
                                    </InfoBlock>

                                    <InfoBlock icon={<Clock />}>
                                        <div className="w-full">
                                            <h3 className="font-sans text-white font-bold text-xl mb-4 tracking-tight">Horario de Apertura</h3>
                                            <dl className="grid grid-cols-1 gap-2 text-sm md:text-base max-w-sm">
                                                {horario.map((h) => (
                                                    <div key={h.dia} className="flex justify-between border-b border-white/5 pb-1">
                                                        <dt className="text-gray-400">{h.dia}</dt>
                                                        <dd className={h.temprano ? 'text-gold font-bold italic' : 'text-gray-300'}>{h.horas}</dd>
                                                    </div>
                                                ))}
                                                <div className="flex justify-between">
                                                    <dt className="text-gray-400 font-medium italic">Domingo</dt>
                                                    <dd className="text-red-500 font-bold uppercase text-xs tracking-widest flex items-center">Cerrado</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </InfoBlock>

                                    <InfoBlock icon={<Banknote />} iconClassName="text-red-500">
                                        <div>
                                            <h3 className="font-sans text-white font-bold text-xl mb-1 tracking-tight italic">Aviso de Pago</h3>
                                            <p className="text-red-400 font-bold uppercase text-sm tracking-widest">SOLO PAGO EN EFECTIVO</p>
                                        </div>
                                    </InfoBlock>
                                </div>
                            </div>

                            <div data-revelar className="map-container relative rounded-panel overflow-hidden border-8 border-white/5 shadow-2xl h-[500px]">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1599.4132898093005!2d-6.1272882!3d36.702705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dc6c91b942609%3A0x1c1b8c89e268e203!2sJos%C3%A9%20Estilistas!5e0!3m2!1ses!2ses!4v1772478467162!5m2!1ses!2ses" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de ubicación de José Estilistas"></iframe>
                                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                                    <p className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Visita a José Estilistas</p>
                                    <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex items-center min-h-tap bg-gold-gradient text-black px-6 py-2 rounded-full text-sm font-black">CÓMO LLEGAR {nuevaPestana}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reservas Booksy */}
                <section id="reservas" className="py-24 bg-white text-black text-center" aria-label="Reservas Online">
                    <div data-revelar className="max-w-3xl mx-auto px-4">
                        <h2 className="text-5xl font-bold mb-8 italic">Reserva tu momento</h2>
                        <p className="text-gray-600 mb-12 text-lg">Haz click en el botón para abrir el calendario de citas y elegir tu hora. Sin llamadas, sin esperas.</p>

                        <a href={BOOKSY_URL} target="_blank" rel="noreferrer" className="inline-flex flex-col items-center gap-4 bg-black text-white px-12 py-8 rounded-card hover:scale-105 transition-transform shadow-2xl">
                            <span className="text-xs font-black uppercase tracking-eyebrow-wide text-gold">Abrir Booksy</span>
                            <span className="text-3xl font-bold">RESERVAR ONLINE AHORA</span>
                            {nuevaPestana}
                        </a>

                        <div className="mt-16 bg-zinc-100 p-8 rounded-3xl border-2 border-dashed border-zinc-300">
                            <h3 className="font-sans font-bold uppercase tracking-widest text-sm mb-4">Recuerda nuestras normas</h3>
                            <div className="grid sm:grid-cols-2 gap-6 text-sm text-left font-medium">
                                <article className="flex items-center gap-3 text-red-700">
                                    <AlertCircle size={20} /> Solo pago en efectivo en el local.
                                </article>
                                <article className="flex items-center gap-3 text-zinc-600">
                                    <Calendar size={20} /> Cancela con 6h de antelación.
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer de la página */}
            <footer className="py-16 bg-black border-t border-white/5 text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <img src="/logo2.png" alt="Logo José Estilistas Peluquería y Estética" className="h-40 w-auto mx-auto mb-6 object-contain" />
                    <nav className="flex justify-center gap-6 mb-8" aria-label="Redes Sociales">
                        <SocialLink href="https://www.instagram.com/joseestilistas/" label="Instagram"><Instagram /></SocialLink>
                        <SocialLink href="https://www.facebook.com/joseestilistasjerez/?locale=es_ES" label="Facebook"><Facebook /></SocialLink>
                    </nav>
                    <p className="text-gray-400 text-sm tracking-widest uppercase mb-2">© 2024 José Estilistas • Plaza de Nicaragua 1A • Jerez</p>
                    <p className="text-2xs text-gray-400 tracking-eyebrow uppercase">Especialista en degradado y afeitado tradicional</p>
                </div>
            </footer>

            {/* WhatsApp Button */}
            <aside aria-label="Contacto rápido">
                <a href="https://wa.me/34658889486" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp (se abre en otra pestaña)" className="sticky-cta bg-whatsapp text-white p-5 rounded-full shadow-whatsapp-glow hover:scale-110 transition-transform">
                    <MessageCircle size={32} />
                </a>
            </aside>
        </div>
    );
}
