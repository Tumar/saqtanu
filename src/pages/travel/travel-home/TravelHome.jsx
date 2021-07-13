import {
  Advantages,
  CovidGifts,
  How,
  Faq,
  Glossary,
  Footer,
} from '../../../components';

import TravelHero from '../travel-hero/TravelHero';

import './TravelHome.scss';

function TravelHome({ data, pageStyle }) {
  return (
    <section style={pageStyle}>
      <TravelHero></TravelHero>
      <Advantages list={data.advantages} color={data.activeColor}></Advantages>
      <CovidGifts></CovidGifts>
      <How list={data.how} color={data.activeColor}></How>
      <Faq color={data.activeColor}></Faq>
      <Glossary></Glossary>
      <Footer></Footer>
    </section>
  );
}

export default TravelHome;
