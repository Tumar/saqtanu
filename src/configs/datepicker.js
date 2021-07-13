const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const LOCALE = {
    localize: {
        month: n => months[n],
        day: n => days[n]
    },
    formatLong: {}
}

const FORMAT = 'dd.MM.yyyy';

const datepickerConfig = {
    LOCALE,
    FORMAT
}

export default datepickerConfig;