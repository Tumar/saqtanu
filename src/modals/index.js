export { default as Modal } from './modal/Modal';

export const MODAL = {
    REQUEST: 'request',
    PARTNER: 'partner',
    COVID: 'covid',
    ACCIDENT: 'accident',
    REAL_ESTATE: 'real-estate',
    SHENGEN: 'shengen',
    TRAVEL: 'travel',
    CONDITIONS: 'conditions',
    SUCCESS: 'success',
}

export const MODALS = [
    { key: MODAL.REQUEST, isShown: false, data: null },
    { key: MODAL.PARTNER, isShown: false, data: null },
    { key: MODAL.COVID, isShown: false, data: null },
    { key: MODAL.ACCIDENT, isShown: false, data: null },
    { key: MODAL.REAL_ESTATE, isShown: false, data: null },
    { key: MODAL.TRAVEL, isShown: false, data: null },
    { key: MODAL.SHENGEN, isShown: false, data: null },
    { key: MODAL.CONDITIONS, isShown: false, data: null },
    { key: MODAL.SUCCESS, isShown: false, data: null },
]