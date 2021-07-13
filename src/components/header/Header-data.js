export const NAV_LINKS = [
    {
        label: 'Автострахование',
        href: '#',
        children: [
            {
                label: 'ОГПО',
                icon: '/assets/icons/header/auto.svg',
                href: '/ogpo',
            },
            {
                label: 'КАСКО',
                icon: '/assets/icons/header/auto.svg',
                href: '/kasko',
            },
        ],
    },
    {
        label: 'Здоровье',
        href: '#',
        children: [
            {
                label: 'Страхование от коронавируса',
                href: '/covid',
            },
            {
                label: 'Страхование от несчастных случаев',
                href: '/accident',
            },

            {
                label: 'Страхование путешествий',
                href: '/travel',
            },
        ],
    },
    {
        label: 'Недвижимость',
        href: '/real-estate',
    },
];