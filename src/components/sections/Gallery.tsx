import placaDisplay from '../../assets/placa-display.jpg'
import placaCorte from '../../assets/placa-corte-especial.jpg'
import bannerOficina from '../../assets/banner-oficina-sorriso.jpg'
import { getWhatsAppLink } from '../../constants/client'

const photos = [
    {
        src: placaDisplay,
        label: 'Display em placa PS adesivada',
    },
    {
        src: placaCorte,
        label: 'Placa PS adesivada corte especial',
    },
    {
        src: bannerOficina,
        label: 'Banner externo — Oficina do Sorriso',
    },
]

export function Gallery() {
    return (
        <section id="galeria" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Nossos Trabalhos
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        Cada peça entregue com atenção aos detalhes e qualidade de ponta.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {photos.map((photo) => (
                        <div
                            key={photo.label}
                            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                        >
                            <img
                                src={photo.src}
                                alt={photo.label}
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-400 text-sm mt-8">
                    Quer um trabalho como esse?{' '}
                    <a
                        href={getWhatsAppLink()}
                        className="text-orange-500 hover:underline"
                    >
                        Fale com a gente
                    </a>
                </p>

            </div>
        </section>
    )
}
