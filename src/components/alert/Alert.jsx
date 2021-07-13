import { useState } from 'react';
import './Alert.scss';

function Alert() {
  const [isShown, setIsShown] = useState(true);
  return isShown ? (
    <div className='alert'>
      <div>
        <span className='color-primary alert__prefix'>Важно:</span>
        <span className='color-white'>
          Для оплаты вы будете перенаправлены на сайт выбранной страховой
          компании
        </span>
      </div>
      <button
        onClick={() => {
          setIsShown(false);
        }}
        className='alert__close'
      >
        <img src='/assets/icons/alert/close.svg' alt='Закрыть' />
      </button>
    </div>
  ) : (
    ''
  );
}

export default Alert;