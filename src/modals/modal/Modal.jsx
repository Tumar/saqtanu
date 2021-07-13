import { useEffect, useState } from 'react';

import {
  RequestModal,
  PartnerModal,
  PlanModal,
  ConditionsModal,
  ShengenModal,
  SuccessModal,
} from '../modal-components';
import { MODAL } from '..';

import './Modal.scss';

function Modal({ modals, onModalClose }) {
  const [currentModal, setCurrentModal] = useState(null);

  useEffect(() => {
    setCurrentModal(modals.find((modal) => modal.isShown) || null);
  }, [modals]);

  const renderModal = (modal) => {
    switch (modal.key) {
      case MODAL.REQUEST:
        return <RequestModal onModalClose={onModalClose}></RequestModal>;

      case MODAL.PARTNER:
        return <PartnerModal onModalClose={onModalClose}></PartnerModal>;

      case MODAL.COVID:
        return (
          <PlanModal
            onModalClose={onModalClose}
            plan={modal.data?.plan}
            key={modal.key}
            title='Страхование <br /> от коронавируса'
          ></PlanModal>
        );

      case MODAL.ACCIDENT:
        return (
          <PlanModal
            onModalClose={onModalClose}
            plan={modal.data?.plan}
            key={modal.key}
            title='Страхование <br /> от несчастных случаев'
          ></PlanModal>
        );

      case MODAL.TRAVEL:
        return (
          <PlanModal
            onModalClose={onModalClose}
            plan={modal.data?.plan}
            key={modal.key}
            title='Страхование <br /> для путешествий за границу'
          ></PlanModal>
        );

      case MODAL.REAL_ESTATE:
        return (
          <PlanModal
            onModalClose={onModalClose}
            plan={modal.data?.plan}
            key={modal.key}
            title='Страхование недвижимости'
          ></PlanModal>
        );

      case MODAL.SHENGEN:
        return <ShengenModal onModalClose={onModalClose}></ShengenModal>;

      case MODAL.CONDITIONS:
        return <ConditionsModal onModalClose={onModalClose}></ConditionsModal>;

      case MODAL.SUCCESS:
        return <SuccessModal onModalClose={onModalClose}></SuccessModal>;

      default:
        break;
    }
  };

  return currentModal ? (
    <section
      className='modal-wrap'
      onClick={() => {
        onModalClose(currentModal.key);
      }}
    >
      <section
        onClick={(event) => {
          event.stopPropagation();
        }}
        className='modal-content'
      >
        {renderModal(currentModal)}
      </section>
    </section>
  ) : (
    ''
  );
}

export default Modal;
