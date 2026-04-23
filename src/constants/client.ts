export const CLIENT = {
    name: 'Ploter.com',
    tagline: 'Comunicação Visual há mais de 30 anos no Rio de Janeiro',
    whatsapp: '5521999611266',
    whatsappMessage: 'Olá! Vim pelo site da Ploter.com e gostaria de solicitar um orçamento.',
    address: 'Freguesia – Jacarepaguá, Rio de Janeiro, RJ',
    hours: 'Seg–Sex: 8h às 18h | Sáb: 8h às 13h',
    instagram: 'https://instagram.com/ploterdigital',
    googleMaps: '',
    services: [
        {
            title: 'Banners',
            description: 'Impressão de alta resolução para eventos, lojas e feiras.',
            icon: 'Image',
        },
        {
            title: 'Lonas',
            description: 'Lonas para fachadas, coberturas e comunicação visual externa.',
            icon: 'Layout',
        },
        {
            title: 'Adesivos',
            description: 'Adesivos simples, perfurados, transparentes e blackout.',
            icon: 'Layers',
        },
        {
            title: 'Placas PS',
            description: 'Placas em PS para sinalização interna e externa.',
            icon: 'Square',
        },
        {
            title: 'Wind Flags',
            description: 'Bandeiras de alto impacto visual para o seu negócio.',
            icon: 'Flag',
        },
    ],
}

export function getWhatsAppLink() {
    return `https://wa.me/${CLIENT.whatsapp}?text=${encodeURIComponent(CLIENT.whatsappMessage)}`
}
