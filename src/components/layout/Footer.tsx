import { CLIENT } from '../../constants/client'
import { theme } from '../../themes'

export function Footer() {
    return (
        <footer className="text-gray-400 py-10" style={{ backgroundColor: theme.bgDark }}>
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                    <span className="font-bold text-xl" style={{ color: theme.accent }}>
                        {CLIENT.name}
                    </span>
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
                            className="hover:underline"
                            style={{ color: theme.accent }}
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
