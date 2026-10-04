import { Star } from './icons';

export default function ReviewCard({ inicial, autor, texto }) {
    return (
        <article className="card-dark p-8 rounded-3xl relative">
            <div className="text-gold mb-4 flex gap-1" role="img" aria-label="5 de 5 estrellas">
                {[0, 1, 2, 3, 4].map((i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="italic text-gray-300 mb-6 font-medium">{`"${texto}"`}</p>
            <div className="flex items-center gap-3">
                <div aria-hidden="true" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center font-bold text-gold">{inicial}</div>
                <span className="font-bold text-white">{autor}</span>
            </div>
        </article>
    );
}
