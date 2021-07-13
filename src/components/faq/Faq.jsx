import './Faq.scss';

function Faq({ color }) {
  const wrapStyle = {
    backgroundColor: color,
  };
  const mainTitle = 'Остались вопросы ?';

  return (
    <section className='faq'>
      <section style={wrapStyle} className='faq__wrap'>
        <div className='faq__content'>
          <article className='faq__article'>
            <h3 className='color-white'>{mainTitle}</h3>
            <p className='t-base'>
              Если у вас остались вопросы, заполните форму и мы свяжемся с Вами
              в ближайшее время
            </p>
          </article>
          <form className='faq__form'>
            <input type='text' placeholder='Имя' />
            <input type='text' placeholder='Телефон' />
            <button type='submit' className='btn btn--primary'>
              Отправить заявку
            </button>
          </form>
        </div>
        <div className='faq__img'>
          <img src='/assets/img/faq/main.svg' alt={mainTitle} />
        </div>
      </section>
    </section>
  );
}

export default Faq;
