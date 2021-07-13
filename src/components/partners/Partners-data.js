const PARTNERS_IMG_PATH = '/assets/img/partners';

function mapPath(imageName) {
    return `${PARTNERS_IMG_PATH}/${imageName}.png`;
}

export const PARTNERS_LIST = [
    {
        alt: 'Евразия',
        src: mapPath('eurasia')
    },
    {
        alt: 'Аманат',
        src: mapPath('amanat')
    },
    {
        alt: 'Freedom Finance',
        src: mapPath('freedom')
    },
    {
        alt: 'Halyk - страховая компания',
        src: mapPath('halyk')
    },
    {
        alt: 'Jysan Garant',
        src: mapPath('jysan')
    },
    {
        alt: 'Halyk Life',
        src: mapPath('halyk-life')
    }
]