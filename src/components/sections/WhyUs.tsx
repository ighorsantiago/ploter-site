import { Zap, Shield, MapPin, Trophy } from 'lucide-react'
import { theme } from '../../themes'

const reasons = [
    {
        icon: <Trophy size={28} style={{ color: theme.accent }} />,
        title: '30 Anos de Mercado',
        description: 'Três décadas servindo empresas no Rio com excelência e pontualidade.',
    },
    {
        icon: <Zap size={28} style={{ color: theme.accent }} />,
        title: 'Entrega Rápida',
        description: 'Produção ágil para você não perder nenhum prazo.',
    },
    {
        icon: <Shield size={28} style={{ color: theme.accent }} />,
        title: 'Qualidade Garantida',
        description: 'Materiais premium e impressão de alta resolução em tudo.',
    },
    {
        icon: <MapPin size={28} style={{ color: theme.accent }} />,
        title: 'Aqui no Rio',
        description: 'Atendimento local, sem intermediários e com suporte real.',
    },
]

export function WhyUs() {
    return (
        <section className="py-24" style={{ backgroundColor: theme.bgDark }}>
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Por que a Ploter.com?
                    </h2>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Mais do que impressão — entregamos resultado visual com responsabilidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason) => (
                        <div
                            key={reason.title}
                            className="bg-gray-800 rounded-2xl p-8 border border-gray-700 transition-all hover:opacity-90"
                        >
                            <div className="mb-4">{reason.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
