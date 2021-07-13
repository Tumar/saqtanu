import './How.scss';

function How({ list, color }) {
  const indexStyle = {
    color: color,
  };

  const mainTitle = 'Как оформить страховку?';

  return (
    <section className='how'>
      <section className='container'>
        <div className='how__wrap'>
          <div className='how__content'>
            <h3>{mainTitle}</h3>
            <ul className='how__list'>
              {list.map((item, index) => {
                return (
                  <li key={index} className='how__item'>
                    <div style={indexStyle} className='how__index t-large'>
                      {`0${index + 1}`}
                    </div>
                    <article className='how__article'>
                      <h5
                        dangerouslySetInnerHTML={{
                          __html: item.title,
                        }}
                      ></h5>
                      <p className='t-base'>{item.description}</p>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='how__img'>
            <img src='/assets/img/how/main.png' alt={mainTitle} />
          </div>
        </div>
      </section>
    </section>
  );
}

export default How;
