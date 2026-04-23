import { CLIENT, getWhatsAppLink } from '../../constants/client'
import { ArrowRight } from 'lucide-react'

export function Hero() {
    return (
        <section className="min-h-screen bg-gray-900 flex items-center justify-center pt-20">
            <div className="max-w-6xl mx-auto px-4 text-center">

                <span className="inline-block bg-orange-500/10 text-orange-400 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
                    Gráfica no Rio de Janeiro
                </span>

                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                    Sua marca com{' '}
                    <span className="text-orange-500">impacto visual</span>{' '}
                    de verdade
                </h2>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    {CLIENT.tagline}. Entrega rápida, qualidade profissional e preço justo.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
                    >
                        Solicitar Orçamento
                        <ArrowRight size={20} />
                    </a>

                    <a
                        href="#servicos"
                        className="flex items-center justify-center gap-2 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 font-semibold px-8 py-4 rounded-full text-lg transition-colors"
                    >
                        Ver Serviços
                    </a>
                </div>

            </div>
        </section>
    )
}
