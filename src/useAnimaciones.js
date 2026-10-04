import { useLayoutEffect } from 'react';
import { animate, createScope, createTimeline, stagger, utils } from 'animejs';

// Animaciones de entrada con anime.js.
// - [data-hero="..."]: entrada del hero al cargar la página.
// - [data-revelar]: el elemento aparece al entrar en pantalla.
// - [data-revelar-grupo]: sus hijos aparecen escalonados al entrar en pantalla.
// Con prefers-reduced-motion no se anima nada y todo se ve desde el principio.
export default function useAnimaciones(rootRef) {
    // useLayoutEffect para ocultar los elementos antes del primer pintado y evitar parpadeos
    useLayoutEffect(() => {
        const scope = createScope({
            root: rootRef.current,
            mediaQueries: { reducir: '(prefers-reduced-motion: reduce)' },
        }).add(({ matches }) => {
            if (matches.reducir) return;
            const raiz = rootRef.current;

            // Estado inicial del hero antes del primer pintado; la timeline lo lleva a su sitio
            utils.set('[data-hero="linea"]', { scaleX: 0 });
            utils.set('[data-hero="eyebrow"]', { opacity: 0, x: -12 });
            utils.set('[data-hero="titulo"] > span', { opacity: 0, y: '0.35em' });
            utils.set('[data-hero="texto"], [data-hero="botones"] > *, [data-hero="metricas"] > *', { opacity: 0, y: 16 });

            createTimeline({ defaults: { ease: 'outExpo', duration: 1100 } })
                .add('[data-hero="linea"]', { scaleX: 1, duration: 900 }, 150)
                .add('[data-hero="eyebrow"]', { opacity: 1, x: 0 }, '<<+=250')
                .add('[data-hero="titulo"] > span', { opacity: 1, y: 0, delay: stagger(120) }, '<<+=100')
                .add('[data-hero="texto"]', { opacity: 1, y: 0 }, '<<+=500')
                .add('[data-hero="botones"] > *', { opacity: 1, y: 0, delay: stagger(100) }, '<<+=150')
                .add('[data-hero="metricas"] > *', { opacity: 1, y: 0, delay: stagger(100) }, '<<+=150');

            // Las secciones aparecen al entrar en pantalla. Al saltar con un enlace (#servicios, #contacto)
            // las que quedan por encima también tienen que mostrarse aunque no se hayan visto pasar.
            const entradas = new Map();
            const revelar = (el, objetivos, delay) => {
                utils.set(objetivos, { opacity: 0, y: 32 });
                entradas.set(el, () => animate(objetivos, { opacity: 1, y: 0, duration: 1000, ease: 'outCubic', delay }));
            };
            raiz.querySelectorAll('[data-revelar]').forEach((el) => revelar(el, el, 0));
            raiz.querySelectorAll('[data-revelar-grupo]').forEach((el) => revelar(el, el.children, stagger(120)));

            // El margen superior enorme hace que cuente como visto todo lo que ya queda por encima de la pantalla
            const observador = new IntersectionObserver((cambios) => {
                cambios.forEach(({ target, isIntersecting }) => {
                    if (!isIntersecting) return;
                    entradas.get(target)();
                    observador.unobserve(target);
                });
            }, { rootMargin: '100000px 0px -8% 0px' });
            entradas.forEach((_, el) => observador.observe(el));

            return () => observador.disconnect();
        });

        return () => scope.revert();
    }, [rootRef]);
}
