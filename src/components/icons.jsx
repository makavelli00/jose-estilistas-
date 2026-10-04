// Iconos SVG en línea (trazos de Lucide). Heredan el color con currentColor.
const base = {
    'aria-hidden': 'true',
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
};

const icon = (paths, defaultClass) =>
    function Icon({ size = 24, className = defaultClass, ...props }) {
        return <svg {...base} width={size} height={size} className={className} {...props}>{paths}</svg>;
    };

export const ArrowRight = icon(<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>, 'lucide lucide-arrow-right');
export const Star = icon(<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />);
export const CheckCircle = icon(<><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>);
export const Scissors = icon(<><circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" /></>);
export const Clock = icon(<><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>, 'lucide lucide-clock');
export const Calendar = icon(<><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></>, 'lucide lucide-calendar');
export const MapPin = icon(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>, 'lucide lucide-map-pin');
export const Banknote = icon(<><rect width="20" height="12" x="2" y="6" rx="2" /><circle cx="12" cy="12" r="2" /><line x1="6" x2="6" y1="12" y2="12" /><line x1="18" x2="18" y1="12" y2="12" /></>, 'lucide lucide-banknote');
export const AlertCircle = icon(<><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></>, 'lucide lucide-alert-circle');
export const MessageCircle = icon(<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />, 'lucide lucide-message-circle');
export const Instagram = icon(<><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>);
export const Facebook = icon(<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />);
