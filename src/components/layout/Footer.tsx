import { CLIENT } from '../../constants/client'

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <span className="text-orange-500 font-bold text-xl">{CLIENT.name}</span>
                    <p className="text-sm mt-1">{CLIENT.address}</p>
                    <p className="text-sm">{CLIENT.hours}</p>
                </div>
                <div className="text-sm text-center md:text-right">
                    <p>
                        Instagram:{' '}
                        <a
                            href={CLIENT.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 hover:underline"
                        >
                            @ploterdigital
                        </a>
                    </p>
                    <p className="mt-4 text-gray-600 text-xs">
                        © {new Date().getFullYear()} {CLIENT.name}. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
