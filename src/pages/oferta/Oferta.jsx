import { Breadcrumbs, Footer } from '../../components';

import './Oferta.scss';

function Oferta() {
  const breadcrumbs = [
    {
      href: 'oferta',
      label: 'Договор оферты',
    },
  ];
  return (
    <section className='oferta'>
      <section className='container'>
        <Breadcrumbs list={breadcrumbs}></Breadcrumbs>

        <article className='oferta__article'>
          <h3>Договор оферты</h3>
          <p className='t-large'>
            Мы не передаем данные наших клиентов третьим лицам. Данные нужны
            лишь для получения точной стоимости из Государственной Базы Данных.
          </p>
        </article>

        <article className='oferta__article'>
          <h4>Заголовок о договоре</h4>
          <p className='t-large'>
            Компании, которые хотят оптимизировать финансовые потоки по заданным
            правилам для сокращения ручной работы, а также компании, которые
            хотят внедрить новые сервисы на основе платежейс
          </p>
          <img src='/assets/img/oferta/main.png' alt='Заголовок о договоре' />
        </article>

        <article className='oferta__article'>
          <h4>Sharing a Project Link</h4>
          <p className='t-large'>
            You can also invite collaborators by sharing a project link.
          </p>
          <p className='t-large'>
            To share a project link, click the Copy Project Link button at the
            bottom of the Collaboration menu. You can send the link to anyone
            you'd like.
          </p>
          <p className='t-large'>
            To control who can join your project via a project link, click the
            access dropdown at the bottom of the collaboration menu either
            Anyone with the link can view or Only collaborators can access.
          </p>
        </article>
      </section>
      <Footer></Footer>
    </section>
  );
}

export default Oferta;
