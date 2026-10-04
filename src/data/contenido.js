export const BOOKSY_URL = 'https://booksy.com/es-es/6593_jose-estilistas_barberia_26580_jerez-de-la-frontera';
export const MAPS_URL = 'https://maps.app.goo.gl/sujN24vHKbXe4VPB9';

export const resenas = [
    { inicial: 'N', autor: 'Nacho • Cliente confirmado', texto: 'José es un crack. Se nota cuando alguien disfruta de su profesión. El local está estupendo y el servicio es inmejorable.' },
    { inicial: 'F', autor: 'José Fco. • Cliente habitual', texto: 'Todo lo que esperas de un buen barbero: corte preciso y conversación amena. El local muy limpio y bien climatizado.' },
    { inicial: 'J', autor: 'Juan • Reseña de Google', texto: 'El mejor degradado de la zona. Siempre me lo deja perfecto. Lo recomiendo sin duda alguna en Jerez.' },
];

export const serviciosDestacados = [
    {
        titulo: 'Corte Premium',
        descripcion: 'Especialistas en degradados (fade) limpios y precisos que resaltan tus facciones.',
        precio: '13,00 €',
        etiquetaReserva: 'Reservar Corte Premium',
        imagen: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800',
    },
    {
        titulo: 'Afeitado Express / Arreglo Barba',
        descripcion: 'Diseño y perfilado básico de barba para un aspecto limpio y cuidado en poco tiempo.',
        precio: '7,00 €',
        etiquetaReserva: 'Reservar Afeitado Express o Arreglo de Barba',
        imagen: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    },
    {
        titulo: 'Corte Clásico',
        descripcion: 'Corte tradicional a tijera o máquina. Incluye lavado, secado y peinado a medida.',
        precio: '12,00 €',
        etiquetaReserva: 'Reservar Corte Clásico',
        imagen: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800',
        destacado: 'Esencial',
    },
];

// Carta completa: para cambiar un precio o añadir un servicio basta con editar esta lista
export const carta = [
    {
        categoria: 'Cortes de Cabello',
        servicios: [
            { nombre: 'Corte clásico', precio: '12,00 €', duracion: '20 min', descripcion: 'Incluye: -Lavado y acondicionado (bajo petición) -Asesoramiento -Corte de...' },
            { nombre: 'Corte Premium (Degradado)', precio: '13,00 €', duracion: '25 min', descripcion: 'Corte de cabello exclusivo para cambio radical de imagen de longitud de larga a...' },
            { nombre: 'Corte INFANTIL (hasta 7 años)', precio: '10,00 €', duracion: '20 min', descripcion: 'Corte de cabello para niños de 0 a 7 años de edad. Utilizando productos de...' },
            { nombre: 'Corte Woman (Rapado)', precio: '12,00 €', duracion: '20 min', descripcion: '* Corte femenino de cabello corto (Rapado). **Para cabello medio/largo...' },
            { nombre: 'Corte laterales', precio: '10,00 €', duracion: '20 min', descripcion: 'El corte de pelo es un reflejo del carácter y la personalidad de uno. Dependiendo...' },
        ],
    },
    {
        categoria: 'Barba y Ritual',
        servicios: [
            { nombre: 'Afeitado Express ó arreglo barba', precio: '7,00 €', duracion: '20 min', descripcion: 'Chicos, prestad atención: lucir una estupenda barba no es algo que pase p...' },
            { nombre: 'Afeitado tradicional', precio: '14,00 €', duracion: '30 min', descripcion: 'Asesoramiento personalizado. Diseño y tallado de forma con mensaje final...' },
        ],
    },
    {
        categoria: 'Combos y Rituales Completos',
        servicios: [
            { nombre: 'Corte clasico + Afeitado Express', precio: '17,00 €', duracion: '30 min', descripcion: 'Corte de cabello con asesoramiento personalizado. Arreglo de barba básico...' },
            { nombre: 'Corte Premium (Degradado) +Afeitado Express', precio: '18,00 €', duracion: '40 min', descripcion: 'Corte de cabello exclusivo para cambio radical de imagen de longitud de larga a...' },
            { nombre: 'Corte clasico + Afeitado tradicional', precio: '25,00 €', duracion: '40 min', descripcion: 'Corte de cabello con asesoramiento personalizado. Arreglo de barba con...' },
            { nombre: 'Corte Premium (Degradado)+Afeitado tradicional', precio: '26,00 €', duracion: '40 min', descripcion: 'Corte de cabello con asesoramiento exclusivo para un cambio radical de...' },
        ],
    },
    {
        categoria: 'Trabajos Técnicos',
        servicios: [
            { nombre: 'Color Barba', precio: '15,00 €+', duracion: '20 min', descripcion: 'Para este tipo de servicio hay que coger cita telefónica al 658889486, ya que el...' },
            { nombre: 'Tratamiento Anti-caida', precio: '4,00 €', duracion: '30 min' },
            { nombre: 'Tratamiento Anti-Caspa', precio: '4,00 €', duracion: '30 min' },
        ],
    },
    {
        categoria: 'Wedding Barber Home',
        servicios: [
            { nombre: 'Desplazamiento Al Domicilio', precio: 'Gratis', duracion: '30 min' },
            { nombre: 'Opción 2', precio: '75,00 €+', duracion: '3 h' },
        ],
    },
];

export const horario = [
    { dia: 'Lunes', horas: '10:00 - 13:30 | 17:00 - 20:30' },
    { dia: 'Martes', horas: '09:30 - 13:30 | 17:00 - 20:30', temprano: true },
    { dia: 'Miércoles', horas: '10:00 - 13:30 | 17:00 - 20:30' },
    { dia: 'Jueves', horas: '09:30 - 13:30 | 17:00 - 20:30', temprano: true },
    { dia: 'Viernes', horas: '10:00 - 13:30 | 17:00 - 20:30' },
    { dia: 'Sábado', horas: '09:30 - 13:30', temprano: true },
];
