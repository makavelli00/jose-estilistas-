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
        titulo: 'Afeitado Express o arreglo de barba',
        descripcion: 'Diseño y perfilado básico de barba para un aspecto limpio y cuidado en poco tiempo.',
        precio: '7,00 €',
        etiquetaReserva: 'Reservar Afeitado Express o Arreglo de Barba',
        imagen: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    },
    {
        titulo: 'Corte Clásico',
        descripcion: 'Corte tradicional a tijera o máquina, con asesoramiento incluido. Lavado bajo petición.',
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
            { nombre: 'Corte clásico', precio: '12,00 €', duracion: '20 min', descripcion: 'Asesoramiento y corte. Lavado y acondicionado bajo petición.' },
            { nombre: 'Corte Premium (Degradado)', precio: '13,00 €', duracion: '25 min', descripcion: 'Degradado limpio y preciso, ideal para un cambio radical de imagen.' },
            { nombre: 'Corte INFANTIL (hasta 7 años)', precio: '10,00 €', duracion: '20 min', descripcion: 'Corte para niños de 0 a 7 años.' },
            { nombre: 'Corte Woman (Rapado)', precio: '12,00 €', duracion: '20 min', descripcion: 'Corte femenino para pelo corto o rapado.' },
            { nombre: 'Corte laterales', precio: '10,00 €', duracion: '20 min' },
        ],
    },
    {
        categoria: 'Barba y Ritual',
        servicios: [
            { nombre: 'Afeitado Express o arreglo de barba', precio: '7,00 €', duracion: '20 min', descripcion: 'Perfilado básico para una barba limpia y cuidada.' },
            { nombre: 'Afeitado tradicional', precio: '14,00 €', duracion: '30 min', descripcion: 'Asesoramiento personalizado, diseño y tallado de la barba.' },
        ],
    },
    {
        categoria: 'Combos y Rituales Completos',
        servicios: [
            { nombre: 'Corte clásico + Afeitado Express', precio: '17,00 €', duracion: '30 min', descripcion: 'Corte con asesoramiento personalizado y arreglo básico de barba.' },
            { nombre: 'Corte Premium (Degradado) + Afeitado Express', precio: '18,00 €', duracion: '40 min', descripcion: 'Degradado y arreglo básico de barba.' },
            { nombre: 'Corte clásico + Afeitado tradicional', precio: '25,00 €', duracion: '40 min', descripcion: 'Corte con asesoramiento personalizado y afeitado tradicional.' },
            { nombre: 'Corte Premium (Degradado) + Afeitado tradicional', precio: '26,00 €', duracion: '40 min', descripcion: 'Degradado con asesoramiento personalizado y afeitado tradicional.' },
        ],
    },
    {
        categoria: 'Trabajos Técnicos',
        servicios: [
            { nombre: 'Color Barba', precio: '15,00 €+', duracion: '20 min', descripcion: 'Solo con cita por teléfono: llama al 658 889 486.' },
            { nombre: 'Tratamiento anticaída', precio: '4,00 €', duracion: '30 min' },
            { nombre: 'Tratamiento anticaspa', precio: '4,00 €', duracion: '30 min' },
        ],
    },
    {
        categoria: 'Wedding Barber Home',
        servicios: [
            { nombre: 'Desplazamiento a domicilio', precio: 'Gratis', duracion: '30 min' },
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
