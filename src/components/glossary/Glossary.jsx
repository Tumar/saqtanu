import { useState } from 'react';
import { GLOSSARY_DATA } from './Glossary-data';

import './Glossary.scss';

function Glossary() {
  const list = GLOSSARY_DATA;

  const [active, setActive] = useState(0);

  return (
    <section className='glossary'>
      <section className='container'>
        <h3>FAQ</h3>
        <div className='glossary__wrap'>
          <nav className='glossary__nav'>
            {list.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`t-base glossary__link ${
                    active === index ? 'active' : ''
                  }`}
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  {item.link}
                </button>
              );
            })}
          </nav>
          <div className='glossary__content'>
            {list.map((item, index) => {
              return (
                <article
                  key={index}
                  className={`glossary__item ${
                    active === index ? 'active' : ''
                  }`}
                >
                  <h4
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  ></h4>
                  <p className='t-base'>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
}

export default Glossary;
