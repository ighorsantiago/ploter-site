import { CLIENT, getWhatsAppLink } from '../../constants/client'
import { Phone } from 'lucide-react'

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-orange-500 leading-none">
                        {CLIENT.name}
                    </h1>
                    <p className="text-xs text-gray-500 mt-0.5">
                        Impressão Gráfica no Rio de Janeiro
                    </p>
                </div>

                <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
                >
                    <Phone size={16} />
                    Pedir Orçamento
                </a>
            </div>
        </header>
    )
}
