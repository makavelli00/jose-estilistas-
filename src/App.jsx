import React, { useEffect } from 'react';

export default function App() {
    // Configuración del desplazamiento suave (Smooth Scroll)
    useEffect(() => {
        const handleNavClick = (e) => {
            const targetId = e.currentTarget.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach((link) => link.addEventListener('click', handleNavClick));

        return () => {
            links.forEach((link) => link.removeEventListener('click', handleNavClick));
        };
    }, []);

    // Esquema de datos estructurados (JSON-LD) para GEO/SEO
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": ["Organization", "HairSalon", "LocalBusiness"],
                "@id": "https://joseestilistas.es/#organization",
                "name": "José Estilistas",
                "url": "https://joseestilistas.es",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://joseestilistas.es/logo2.png"
                },
                "image": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074",
                "description": "Barbería y peluquería premium en Jerez de la Frontera especializada en cortes degradados, clásicos y afeitado tradicional a navaja.",
                "telephone": "+34658889486",
                "priceRange": "€€",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Plaza de Nicaragua Local 1A, Parque San Joaquín",
                    "addressLocality": "Jerez de la Frontera",
                    "addressRegion": "Cádiz",
                    "postalCode": "11407",
                    "addressCountry": "ES"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5.0",
                    "bestRating": "5",
                    "worstRating": "1",
                    "reviewCount": "226"
                },
                "sameAs": [
                    "https://www.instagram.com/joseestilistas/",
                    "https://www.facebook.com/joseestilistasjerez/?locale=es_ES",
                    "https://www.linkedin.com/company/jose-estilistas-jerez",
                    "https://twitter.com/JoseEstilistas",
                    "https://www.crunchbase.com/organization/jose-estilistas",
                    "https://www.yelp.es/biz/jose-estilistas-jerez",
                    "https://booksy.com/es-es/6593_jose-estilistas_barberia_26580_jerez-de-la-frontera"
                ]
            },
            {
                "@type": "WebPage",
                "@id": "https://joseestilistas.es/#webpage",
                "url": "https://joseestilistas.es",
                "name": "José Estilistas | Barbería y Peluquería en Jerez de la Frontera",
                "isPartOf": {
                    "@id": "https://joseestilistas.es/#website"
                },
                "about": {
                    "@id": "https://joseestilistas.es/#organization"
                },
                "description": "Descubre la mejor barbería de Jerez de la Frontera. Reserva tu cita online para cortes premium, degradados y afeitados tradicionales."
            },
            {
                "@type": "FAQPage",
                "@id": "https://joseestilistas.es/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "¿Por qué José Estilistas es considerada la mejor barbería de Jerez de la Frontera?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "José Estilistas destaca por combinar la tradición del oficio barbero con las técnicas más vanguardistas de corte masculino. Fundada en 2012, garantizamos resultados de máxima precisión respaldados por más de quince años de experiencia profesional. Nuestro entorno climatizado y exclusivo asegura una experiencia inmejorable y de alto nivel para cada cliente."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "¿Qué diferencia hay entre un corte clásico y un corte premium con degradado?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "El corte clásico utiliza un enfoque tradicional a tijera o máquina para lograr un estilo atemporal, elegante y rápido. Por el contrario, el corte premium implica un desvanecimiento milimétrico o fade que requiere una técnica mucho más exhaustiva y tiempo de ejecución. Ambos servicios incluyen un lavado opcional y asesoramiento personalizado para potenciar tus facciones."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "¿En qué consiste el servicio Wedding Barber Home para novios en Jerez?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Nuestro servicio Wedding Barber Home traslada la experiencia de una barbería de lujo directamente a tu domicilio u hotel el día de tu boda. Este servicio VIP elimina por completo el estrés del desplazamiento, asegurando que tanto el novio como los padrinos luzcan impecables. El trato es altamente personalizado y el desplazamiento es gratuito dentro de nuestras áreas de cobertura habituales."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-[#0a0a0a] text-gray-200 min-h-screen relative font-['Inter',sans-serif]">
            {/* Estilos Globales Inyectados */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@700&display=swap');
        h1, h2, h3, .font-serif-custom { font-family: 'Playfair Display', serif; }
        .gold-gradient { background: linear-gradient(135deg, #d4af37 0%, #f9e29c 50%, #b8860b 100%); }
        .card-dark { background-color: #161616; border: 1px solid #262626; }
        .sticky-cta { position: fixed; bottom: 20px; right: 20px; z-index: 50; }
        .map-container iframe { filter: grayscale(1) invert(0.9) contrast(1.2); }
        .menu-dots { flex-grow: 1; border-bottom: 2px dotted #333; margin: 0 1rem; position: relative; top: -6px; }
      `}} />

            {/* JSON-LD Script para SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

            {/* Encabezado y Navegación Principal */}
            <header className="absolute w-full top-0 z-50 pt-4">
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
                    <div className="flex justify-between items-center h-48">
                        <div className="flex-shrink-0 flex items-center">
                            <img src="/logo2.png" alt="Logo José Estilistas Peluquería y Estética" className="h-40 w-auto object-contain" />
                        </div>
                        <div className="hidden md:flex space-x-12 mx-auto uppercase tracking-widest text-xs font-semibold">
                            <a href="#servicios" className="text-gray-400 hover:text-[#d4af37] transition-colors">Servicios</a>
                            <a href="#contacto" className="text-gray-400 hover:text-[#d4af37] transition-colors">Contacto</a>
                        </div>
                        <a href="#reservas" className="border border-[#d4af37] text-[#d4af37] px-8 py-2.5 font-bold text-xs hover:bg-[#d4af37] hover:text-black transition-colors uppercase tracking-[0.2em]">
                            Reservar
                        </a>
                    </div>
                </nav>
            </header>

            {/* Contenido Principal Semántico */}
            <main>
                {/* Hero Section */}
                <section id="inicio" className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden min-h-[90vh] flex flex-col justify-center border-b border-white/5" aria-label="Inicio">
                    <div className="absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=2074" alt="Interior de Barbería Premium" className="w-full h-full object-cover opacity-30" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]"></div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 w-full flex flex-col items-center">
                        <div className="flex flex-col items-start w-fit">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-[1px] bg-[#d4af37]"></div>
                                <span className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase">Jerez de la Frontera · Est. 2012</span>
                            </div>

                            <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[9rem] font-black uppercase leading-[0.85] tracking-tighter mb-8">
                                <span className="text-white block">Arte</span>
                                <span className="text-[#d4af37] block">En Cada</span>
                                <span className="text-white block">Corte</span>
                            </h1>

                            <p className="font-serif-custom italic text-xl md:text-3xl text-gray-300 max-w-2xl mb-12 leading-relaxed">
                                Donde la precisión se convierte en expresión. Tu imagen, elevada a una forma de arte.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mb-20">
                                <a href="#reservas" className="bg-[#d4af37] text-black px-8 py-4 font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors flex items-center justify-center gap-2 text-xs w-fit">
                                    Reservar Cita <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </a>
                                <a href="#servicios" className="border border-white/30 text-white px-8 py-4 font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors flex items-center justify-center text-xs w-fit">
                                    Ver Servicios
                                </a>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-10 border-t border-white/10 max-w-3xl w-full">
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2 font-black tracking-tighter">15+</div>
                                <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500">Años de oficio</div>
                            </div>
                            <div>
                                <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2 font-black tracking-tighter">226+</div>
                                <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500">Clientes satisfechos</div>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2 font-black tracking-tighter flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#d4af37" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> 5.0
                                </div>
                                <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-500">Valoración media</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Proof Dinámico */}
                <section className="py-16 bg-zinc-950 border-y border-gray-900" aria-label="Testimonios y Reseñas">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-10">
                            <article className="card-dark p-8 rounded-3xl relative">
                                <div className="text-[#d4af37] mb-4 flex gap-1" aria-label="5 estrellas">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                </div>
                                <p className="italic text-gray-300 mb-6 font-medium">"José es un crack. Se nota cuando alguien disfruta de su profesión. El local está estupendo y el servicio es inmejorable."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-[#d4af37]">N</div>
                                    <span className="font-bold text-white">Nacho • Cliente confirmado</span>
                                </div>
                            </article>
                            <article className="card-dark p-8 rounded-3xl relative">
                                <div className="text-[#d4af37] mb-4 flex gap-1" aria-label="5 estrellas">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                </div>
                                <p className="italic text-gray-300 mb-6 font-medium">"Todo lo que esperas de un buen barbero: corte preciso y conversación amena. El local muy limpio y bien climatizado."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-[#d4af37]">F</div>
                                    <span className="font-bold text-white">José Fco. • Cliente habitual</span>
                                </div>
                            </article>
                            <article className="card-dark p-8 rounded-3xl relative">
                                <div className="text-[#d4af37] mb-4 flex gap-1" aria-label="5 estrellas">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#d4af37" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                </div>
                                <p className="italic text-gray-300 mb-6 font-medium">"El mejor degradado de la zona. Siempre me lo deja perfecto. Lo recomiendo sin duda alguna en Jerez."</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-[#d4af37]">J</div>
                                    <span className="font-bold text-white">Juan • Reseña de Google</span>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Sección GEO Optimizada (Preguntas Frecuentes para IA) */}
                <section id="autoridad" className="py-24 bg-[#0a0a0a] border-b border-white/5 relative" aria-label="Por qué elegirnos - Preguntas Frecuentes">
                    <div className="max-w-4xl mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-[#d4af37] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Autoridad Local</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif-custom">¿Por qué elegir José Estilistas?</h2>
                        </div>

                        <div className="space-y-16">
                            <article>
                                <h2 className="text-2xl font-bold text-white mb-4 leading-tight">¿Por qué José Estilistas es considerada la mejor barbería de Jerez de la Frontera?</h2>
                                <p className="text-gray-400 text-lg leading-relaxed mb-6">José Estilistas destaca en Jerez de la Frontera por combinar la tradición del oficio barbero con las técnicas más vanguardistas de corte masculino. Fundada en 2012, nuestra clínica estética capilar garantiza resultados de máxima precisión gracias a más de quince años de experiencia y un entorno climatizado exclusivo.</p>
                                <div className="bg-[#161616] border border-white/10 rounded-2xl p-6">
                                    <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs text-[#d4af37]">Métricas Verificables</h4>
                                    <ul className="grid sm:grid-cols-2 gap-4 text-sm text-gray-300">
                                        <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> <strong>Valoración Google:</strong> 5.0 Estrellas</li>
                                        <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> <strong>Reseñas reales:</strong> +226 Clientes</li>
                                        <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> <strong>Trayectoria:</strong> +15 años de oficio</li>
                                        <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg> <strong>Año de fundación:</strong> 2012</li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Servicios */}
                <section id="servicios" className="py-24 max-w-7xl mx-auto px-4" aria-label="Nuestros Servicios">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-white mb-6">Excelencia en cada detalle</h2>
                        <div className="w-24 h-1 gold-gradient mx-auto mb-6"></div>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">"En José Estilistas, combinamos la técnica clásica con las tendencias más vanguardistas."</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                        {/* Tarjeta 1: Corte Premium */}
                        <article className="card-dark relative rounded-[2.5rem] p-10 hover:border-[#d4af37]/80 transition-all duration-500 group overflow-hidden bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800')" }}>
                            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors duration-500 z-0"></div>
                            <div className="relative z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-6"><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></svg>
                                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">Corte Premium</h3>
                                <p className="text-gray-200 mb-6 font-medium drop-shadow-md">Especialistas en degradados (fade) limpios y precisos que resaltan tus facciones.</p>
                                <div className="pt-6 border-t border-white/20 flex justify-between items-center mt-auto">
                                    <span className="text-xl font-bold text-white drop-shadow-md">13,00 €</span>
                                    <a href="#reservas" className="text-[#d4af37] font-bold group-hover:translate-x-2 transition-transform drop-shadow-md">Reservar →</a>
                                </div>
                            </div>
                        </article>

                        {/* Tarjeta 2: Afeitado Express */}
                        <article className="card-dark relative rounded-[2.5rem] p-10 hover:border-[#d4af37]/80 transition-all duration-500 group overflow-hidden bg-cover bg-center shadow-xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800')" }}>
                            <div className="absolute inset-0 bg-black/80 group-hover:bg-black/60 transition-colors duration-500 z-0"></div>
                            <div className="relative z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-6"><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></svg>
                                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">Afeitado Express / Arreglo Barba</h3>
                                <p className="text-gray-200 mb-6 font-medium drop-shadow-md">Diseño y perfilado básico de barba para un aspecto limpio y cuidado en poco tiempo.</p>
                                <div className="pt-6 border-t border-white/20 flex justify-between items-center">
                                    <span className="text-xl font-bold text-white drop-shadow-md">7,00 €</span>
                                    <a href="#reservas" className="text-[#d4af37] font-bold group-hover:translate-x-2 transition-transform drop-shadow-md">Reservar →</a>
                                </div>
                            </div>
                        </article>

                        {/* Tarjeta 3: Corte Clásico */}
                        <article className="card-dark relative rounded-[2.5rem] p-10 border-2 border-[#d4af37]/40 hover:border-[#d4af37] transition-all duration-500 group overflow-hidden bg-cover bg-center shadow-2xl shadow-[#d4af37]/10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800')" }}>
                            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-zinc-900/90 group-hover:from-black/60 transition-colors duration-500 z-0"></div>
                            <div className="relative z-10">
                                <div className="bg-[#d4af37] text-black text-[10px] font-black px-3 py-1 rounded-full w-fit mb-4 uppercase tracking-tighter shadow-md">Esencial</div>
                                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-md">Corte Clásico</h3>
                                <p className="text-gray-200 mb-6 font-medium drop-shadow-md">Corte tradicional a tijera o máquina. Incluye lavado, secado y peinado a medida.</p>
                                <div className="pt-6 border-t border-white/20 flex justify-between items-center">
                                    <span className="text-xl font-bold text-white drop-shadow-md">12,00 €</span>
                                    <a href="#reservas" className="text-[#d4af37] font-bold group-hover:translate-x-2 transition-transform drop-shadow-md">Reservar →</a>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Carta de Servicios Completa */}
                    <div className="max-w-4xl mx-auto card-dark p-8 md:p-12 rounded-[3rem] shadow-2xl">
                        <div className="text-center mb-12">
                            <h3 className="text-4xl font-bold text-[#d4af37] mb-2">Carta de Servicios</h3>
                            <p className="text-gray-500 tracking-widest uppercase text-sm">Reserva online sin esperas</p>
                        </div>

                        <div className="space-y-12">
                            {/* Categoría: Cortes */}
                            <div>
                                <h4 className="text-2xl font-bold text-white border-b border-gray-800 pb-4 mb-6 uppercase tracking-wider">Cortes de Cabello</h4>
                                <div className="space-y-6">
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Corte clásico</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">12,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 20 min</span>
                                            <span className="text-sm text-gray-400">Incluye: -Lavado y acondicionado (bajo petición) -Asesoramiento -Corte de...</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Corte Premium (Degradado)</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">13,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 25 min</span>
                                            <span className="text-sm text-gray-400">Corte de cabello exclusivo para cambio radical de imagen de longitud de larga a...</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Corte INFANTIL (hasta 7 años)</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">10,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 20 min</span>
                                            <span className="text-sm text-gray-400">Corte de cabello para niños de 0 a 7 años de edad. Utilizando productos de...</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Corte Woman (Rapado)</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">12,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 20 min</span>
                                            <span className="text-sm text-gray-400">* Corte femenino de cabello corto (Rapado). **Para cabello medio/largo...</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Corte laterales</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">10,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 20 min</span>
                                            <span className="text-sm text-gray-400">El corte de pelo es un reflejo del carácter y la personalidad de uno. Dependiendo...</span>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            {/* Categoría: Barba y Ritual */}
                            <div>
                                <h4 className="text-2xl font-bold text-white border-b border-gray-800 pb-4 mb-6 uppercase tracking-wider">Barba y Ritual</h4>
                                <div className="space-y-6">
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Afeitado Express ó arreglo barba</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">7,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 20 min</span>
                                            <span className="text-sm text-gray-400">Chicos, prestad atención: lucir una estupenda barba no es algo que pase p...</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Afeitado tradicional</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">14,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 30 min</span>
                                            <span className="text-sm text-gray-400">Asesoramiento personalizado. Diseño y tallado de forma con mensaje final...</span>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            {/* Categoría: Combos */}
                            <div>
                                <h4 className="text-2xl font-bold text-white border-b border-gray-800 pb-4 mb-6 uppercase tracking-wider">Combos y Rituales Completos</h4>
                                <div className="space-y-6">
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Corte clasico + Afeitado Express</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">17,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 30 min</span>
                                            <span className="text-sm text-gray-400">Corte de cabello con asesoramiento personalizado. Arreglo de barba básico...</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Corte Premium (Degradado) +Afeitado Express</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">18,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 40 min</span>
                                            <span className="text-sm text-gray-400">Corte de cabello exclusivo para cambio radical de imagen de longitud de larga a...</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Corte clasico + Afeitado tradicional</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">25,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 40 min</span>
                                            <span className="text-sm text-gray-400">Corte de cabello con asesoramiento personalizado. Arreglo de barba con...</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Corte Premium (Degradado)+Afeitado tradicional</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">26,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 40 min</span>
                                            <span className="text-sm text-gray-400">Corte de cabello con asesoramiento exclusivo para un cambio radical de...</span>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            {/* Categoría: Trabajos Técnicos */}
                            <div>
                                <h4 className="text-2xl font-bold text-white border-b border-gray-800 pb-4 mb-6 uppercase tracking-wider">Trabajos Técnicos</h4>
                                <div className="space-y-6">
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Color Barba</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">15,00 €+</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 20 min</span>
                                            <span className="text-sm text-gray-400">Para este tipo de servicio hay que coger cita telefónica al 658889486, ya que el...</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Tratamiento Anti-caida</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">4,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 30 min</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Tratamiento Anti-Caspa</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">4,00 €</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 30 min</span>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            {/* Categoría: Wedding Barber Home */}
                            <div>
                                <h4 className="text-2xl font-bold text-white border-b border-gray-800 pb-4 mb-6 uppercase tracking-wider">Wedding Barber Home</h4>
                                <div className="space-y-6">
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Desplazamiento Al Domicilio</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">Gratis</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 30 min</span>
                                        </div>
                                    </article>
                                    <article>
                                        <div className="flex items-baseline w-full">
                                            <span className="text-lg md:text-xl font-semibold text-gray-200">Opción 2</span>
                                            <div className="menu-dots"></div>
                                            <span className="text-xl font-bold text-[#d4af37]">75,00 €+</span>
                                        </div>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className="text-xs text-gray-500 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> 3 h</span>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <a href="#reservas" className="inline-flex items-center gap-2 gold-gradient text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg> RESERVAR MI HORA AHORA
                            </a>
                        </div>
                    </div>
                </section>

                {/* Ubicación y Mapa */}
                <section id="contacto" className="py-24 bg-zinc-950" aria-label="Ubicación y Contacto">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-10">
                                <h2 className="text-5xl font-bold text-white leading-tight">Encuéntranos en <br /><span className="text-[#d4af37]">Jerez de la Frontera</span></h2>

                                <div className="space-y-6">
                                    <article className="flex gap-6 items-start">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 text-[#d4af37]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-xl mb-1 tracking-tight">Nuestra Ubicación</h4>
                                            <p className="text-gray-400 text-lg">Plaza de Nicaragua Local 1A</p>
                                            <p className="text-gray-500 font-medium italic">Parque San Joaquín</p>
                                            <p className="text-gray-400">11407, Jerez de la Frontera, Cádiz</p>
                                            <a href="https://maps.app.goo.gl/sujN24vHKbXe4VPB9" target="_blank" rel="noreferrer" className="inline-block mt-3 text-[#d4af37] font-bold border-b border-[#d4af37]/30 pb-1 hover:border-[#d4af37] transition-all">Ver en Google Maps →</a>
                                        </div>
                                    </article>

                                    <article className="flex gap-6 items-start">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 text-[#d4af37]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                        </div>
                                        <div className="w-full">
                                            <h4 className="text-white font-bold text-xl mb-4 tracking-tight">Horario de Apertura</h4>
                                            <div className="grid grid-cols-1 gap-2 text-sm md:text-base max-w-sm">
                                                <div className="flex justify-between border-b border-white/5 pb-1">
                                                    <span className="text-gray-400">Lunes</span>
                                                    <span className="text-gray-300">10:00 - 13:30 | 17:00 - 20:30</span>
                                                </div>
                                                <div className="flex justify-between border-b border-white/5 pb-1">
                                                    <span className="text-gray-400">Martes</span>
                                                    <span className="text-[#d4af37] font-bold italic">09:30 - 13:30 | 17:00 - 20:30</span>
                                                </div>
                                                <div className="flex justify-between border-b border-white/5 pb-1">
                                                    <span className="text-gray-400">Miércoles</span>
                                                    <span className="text-gray-300">10:00 - 13:30 | 17:00 - 20:30</span>
                                                </div>
                                                <div className="flex justify-between border-b border-white/5 pb-1">
                                                    <span className="text-gray-400">Jueves</span>
                                                    <span className="text-[#d4af37] font-bold italic">09:30 - 13:30 | 17:00 - 20:30</span>
                                                </div>
                                                <div className="flex justify-between border-b border-white/5 pb-1">
                                                    <span className="text-gray-400">Viernes</span>
                                                    <span className="text-gray-300">10:00 - 13:30 | 17:00 - 20:30</span>
                                                </div>
                                                <div className="flex justify-between border-b border-white/5 pb-1">
                                                    <span className="text-gray-400">Sábado</span>
                                                    <span className="text-[#d4af37] font-bold italic">09:30 - 13:30</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-500 font-medium italic">Domingo</span>
                                                    <span className="text-red-500 font-bold uppercase text-xs tracking-widest flex items-center">Cerrado</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>

                                    <article className="flex gap-6 items-start">
                                        <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 text-red-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote"><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><line x1="6" x2="6" y1="12" y2="12" /><line x1="18" x2="18" y1="12" y2="12" /></svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-xl mb-1 tracking-tight italic">Aviso de Pago</h4>
                                            <p className="text-red-400 font-bold uppercase text-sm tracking-widest">SOLO PAGO EN EFECTIVO</p>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            <div className="map-container relative rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl h-[500px]">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1599.4132898093005!2d-6.1272882!3d36.702705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dc6c91b942609%3A0x1c1b8c89e268e203!2sJos%C3%A9%20Estilistas!5e0!3m2!1ses!2ses!4v1772478467162!5m2!1ses!2ses" width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de ubicación de José Estilistas"></iframe>
                                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-center">
                                    <p className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Visita a José Estilistas</p>
                                    <a href="https://maps.app.goo.gl/sujN24vHKbXe4VPB9" target="_blank" rel="noreferrer" className="gold-gradient text-black px-6 py-2 rounded-full text-sm font-black">CÓMO LLEGAR</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reservas Booksy */}
                <section id="reservas" className="py-24 bg-white text-black text-center" aria-label="Reservas Online">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-5xl font-bold mb-8 italic">Reserva tu momento</h2>
                        <p className="text-gray-600 mb-12 text-lg">Haz click en el botón para abrir el calendario de citas y elegir tu hora. Sin llamadas, sin esperas.</p>

                        <a href="https://booksy.com/es-es/6593_jose-estilistas_barberia_26580_jerez-de-la-frontera" target="_blank" rel="noreferrer" className="inline-flex flex-col items-center gap-4 bg-black text-white px-12 py-8 rounded-[2.5rem] hover:scale-105 transition-transform shadow-2xl">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#d4af37]">Abrir Booksy</span>
                            <span className="text-3xl font-bold">RESERVAR ONLINE AHORA</span>
                        </a>

                        <div className="mt-16 bg-zinc-100 p-8 rounded-3xl border-2 border-dashed border-zinc-300">
                            <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Recuerda nuestras normas</h4>
                            <div className="grid sm:grid-cols-2 gap-6 text-sm text-left font-medium">
                                <article className="flex items-center gap-3 text-red-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg> Solo pago en efectivo en el local.
                                </article>
                                <article className="flex items-center gap-3 text-zinc-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></svg> Cancela con 6h de antelación.
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
                        {/* Botón Instagram con SVG directo */}
                        <a href="https://www.instagram.com/joseestilistas/" target="_blank" rel="noreferrer" aria-label="Instagram"
                            className="w-14 h-14 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        {/* Botón Facebook con SVG directo */}
                        <a href="https://www.facebook.com/joseestilistasjerez/?locale=es_ES" target="_blank" rel="noreferrer" aria-label="Facebook"
                            className="w-14 h-14 rounded-full border border-[#d4af37]/40 flex items-center justify-center text-white hover:bg-[#d4af37] hover:text-black hover:border-[#d4af37] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </nav>
                    <p className="text-gray-600 text-sm tracking-widest uppercase mb-2">© 2024 José Estilistas • Plaza de Nicaragua 1A • Jerez</p>
                    <p className="text-[10px] text-gray-800 tracking-[0.3em] uppercase">Especialista en degradado y afeitado tradicional</p>
                </div>
            </footer>

            {/* WhatsApp Button */}
            <a href="https://wa.me/34658889486" target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp" className="sticky-cta bg-[#25D366] text-white p-5 rounded-full shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
            </a>
        </div>
    );
}