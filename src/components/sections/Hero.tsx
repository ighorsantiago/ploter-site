import { CLIENT, getWhatsAppLink } from '../../constants/client'
import { theme } from '../../themes'
import { ArrowRight } from 'lucide-react'

export function Hero() {
    return (
        <section
            className="min-h-screen flex items-center justify-center pt-20"
            style={{ backgroundColor: theme.bgDark }}
        >
            <div className="max-w-6xl mx-auto px-4 text-center">

                <span
                    className="inline-block text-sm font-medium px-4 py-1.5 rounded-full mb-6"
                    style={{ backgroundColor: theme.accent + '1a', color: theme.accent }}
                >
                    Gráfica no Rio de Janeiro
                </span>

                <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                    Sua marca com{' '}
                    <span style={{ color: theme.accent }}>impacto visual</span>{' '}
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
                        className="flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-full text-lg transition-opacity hover:opacity-80"
                        style={{ backgroundColor: theme.accent }}
                    >
                        Solicitar Orçamento
                        <ArrowRight size={20} />
                    </a>

                    <a
                        href="#servicos"
                        className="flex items-center justify-center gap-2 border border-gray-600 text-gray-300 font-semibold px-8 py-4 rounded-full text-lg transition-opacity hover:opacity-80"
                    >
                        Ver Serviços
                    </a>
                </div>

            </div>
        </section>
    )
}
