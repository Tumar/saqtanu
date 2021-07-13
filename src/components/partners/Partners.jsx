import './Partners.scss';
import { PARTNERS_LIST } from './Partners-data';

import ScrollContainer from 'react-indiana-drag-scroll';

function Partners() {
  const partners = PARTNERS_LIST;
  return (
    <ScrollContainer className='partners'>
      <section className='partners__list'>
        {partners.map((item, index) => {
          return (
            <img
              className='partners__item'
              key={index}
              src={item.src}
              alt={item.alt}
            />
          );
        })}
      </section>
    </ScrollContainer>
  );
}

export default Partners;
