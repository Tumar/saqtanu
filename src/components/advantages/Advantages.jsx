import './Advantages.scss';

function Advantages({ list, color }) {
  const iconStyle = {
    backgroundColor: color,
  };

  return (
    <section className='advantages'>
      <div className='container'>
        <article className='advantages__description'>
          <h4>Наши преимущества</h4>
          <p className='t-base'>
            Компании, которые хотят оптимизировать финансовые потоки по заданным
            правилам для сокращения ручной работы, а также компании, которые
            хотят внедрить новые сервисы на основе платежей в своем бизнесе.
          </p>
        </article>
        <ul className='advantages__list'>
          {list.map((item, index) => {
            return (
              <li key={index} className='advantages__item'>
                <div className='advantages__icon' style={iconStyle}>
                  <img src={item.icon} alt={item.title} />
                </div>
                <h5 className='advantages__title'>{item.title}</h5>
                <p className='t-base advantages__description'>
                  {item.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Advantages;
