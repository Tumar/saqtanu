import { Helmet } from 'react-helmet';

import {
  Advantages,
  CovidGifts,
  How,
  Faq,
  Glossary,
  Footer,
} from '../../components';

import CovidHero from './covid-hero/CovidHero';
import CovidPlans from './covid-plans/CovidPlans';

import { COVID_DATA } from './Covid-data';

import './Covid.scss';
import { MODAL } from '../../modals';

function Covid({ onModalShow }) {
  const data = COVID_DATA;

  const pageStyle = {
    backgroundColor: data.backgroundColor,
  };

  return (
    <section style={pageStyle} className='Covid'>
      <Helmet>
        <title>Страхование от коронавируса | Онлайн-маркет по страхованию "Saqtanu"</title>
        <meta
          name='description'
          content='Страхование от коронавируса. Онлайн-маркет по страхованию "Saqtanu". Выберите страховку, которая подходит именно Вам!'
        />
      </Helmet>
      <section className='covid-top'>
        <CovidHero></CovidHero>
        <CovidPlans
          className='covid-plans'
          onPlanSelected={(plan) => {
            onModalShow(MODAL.COVID, { plan });
          }}
        ></CovidPlans>
      </section>
      <Advantages list={data.advantages} color={data.activeColor}></Advantages>
      <CovidGifts></CovidGifts>
      <How list={data.how} color={data.activeColor}></How>
      <Faq color={data.activeColor}></Faq>
      <Glossary></Glossary>
      <Footer></Footer>
    </section>
  );
}

export default Covid;
