import { Alert, Footer, Gifts } from '../../../components';
import './OgpoGifts.scss';

function OgpoGifts() {
  return (
    <section className='ogpo-inner'>
      <section className='container'>
        <Alert></Alert>

        <h3 className='color-white ogpo-inner__heading'>
          Выберите свой подарок
        </h3>

        <Gifts isSelectable={true}></Gifts>
      </section>

      <Footer isDark={true}></Footer>
    </section>
  );
}

export default OgpoGifts;
