export const HOME_HERO_TABS = [
    {
        label: 'Автострахование',
        icon: '/assets/icons/header/auto.svg',
        id: 'auto',
        children: [
            {
                title: 'ОГПО',
                image: '/assets/img/home-hero/auto.svg',
                href: 'ogpo',
                description: `Обязательное автострахование. <br>
                Оформление полиса за 5 минут.`,
                price: '10 000 ₸'
            },
            {
                title: 'КАСКО',
                image: '/assets/img/home-hero/auto.svg',
                href: 'kasko',
                description: 'Рассчитайте стоимость КАСКО для своего автомобиля.',
                price: '10 000 ₸'
            },
        ],
    },
    {
        label: 'Страхование здоровья и жизни',
        id: 'health',
        children: [
            {
                title: 'Страхование от коронавируса',
                image: '/assets/img/home-hero/covid.svg',
                href: 'covid',
                description: 'Страховая защита от коронавирусной инфекции в случае госпитализации',
                price: '4 900 ₸'
            },
            {
                title: 'Страхование здоровья и жизни',
                image: '/assets/img/home-hero/accident.svg',
                href: 'accident',
                description: 'Страховая защита от непредвиденных, несчастных случаев',
                price: '10 000 ₸'
            },
        ],
    },
    {
        label: 'Страхование недвижимости',
        id: 'real-estate',
        children: [
            {
                title: 'Страхование недвижимости',
                image: '/assets/img/home-hero/real-estate.svg',
                href: 'real-estate',
                description: 'Страхование дома, квартиры и прочего недвижимого имущества',
                price: '8 000 ₸'
            }
        ],
    },
    {
        label: 'Страхование во время путешествий',
        id: 'travel',
        children: [
            {
                title: 'Страхование во время путешествий',
                image: '/assets/img/home-hero/travel.svg',
                href: 'travel',
                price: '10 000 ₸'
            }
        ],
    },
];