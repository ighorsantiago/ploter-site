import { CLIENT, getWhatsAppLink } from '../../constants/client'
import { MessageCircle, MapPin, Clock } from 'lucide-react'

export function Contact() {
    return (
        <section id="contato" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                        Fale com a gente
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        Orçamento sem compromisso. Respondemos rápido.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">

                        <div className="flex items-start gap-4">
                            <MessageCircle className="text-orange-500 mt-1 shrink-0" size={24} />
                            <div>
                                <p className="font-semibold text-gray-900">WhatsApp</p>
                                <a
                                    href={`https://wa.me/${CLIENT.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-500 hover:underline"
                                >
                                    Clique para conversar
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <MapPin className="text-orange-500 mt-1 shrink-0" size={24} />
                            <div>
                                <p className="font-semibold text-gray-900">Localização</p>
                                <p className="text-gray-500">{CLIENT.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="text-orange-500 mt-1 shrink-0" size={24} />
                            <div>
                                <p className="font-semibold text-gray-900">Horário</p>
                                <p className="text-gray-500">{CLIENT.hours}</p>
                            </div>
                        </div>

                    </div>

                    <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-xl px-10 py-6 rounded-2xl transition-colors shadow-lg"
                    >
                        <MessageCircle size={28} />
                        Solicitar Orçamento pelo WhatsApp
                    </a>

                </div>
            </div>
        </section>
    )
}
