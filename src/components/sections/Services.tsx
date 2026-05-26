import { CLIENT } from '../../constants/client'
import { theme } from '../../themes'
import { Image, Layout, Layers, Square, Flag } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
    Image: <Image size={32} style={{ color: theme.accent }} />,
    Layout: <Layout size={32} style={{ color: theme.accent }} />,
    Layers: <Layers size={32} style={{ color: theme.accent }} />,
    Square: <Square size={32} style={{ color: theme.accent }} />,
    Flag: <Flag size={32} style={{ color: theme.accent }} />,
}

export function Services() {
    return (
        <section id="servicos" className="py-24" style={{ backgroundColor: theme.bgLight }}>
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        O que a gente faz
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        Soluções visuais para o seu negócio se destacar onde quer que esteja.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CLIENT.services.map((service) => (
                        <div
                            key={service.title}
                            className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all"
                        >
                            <div className="mb-4">{iconMap[service.icon]}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
