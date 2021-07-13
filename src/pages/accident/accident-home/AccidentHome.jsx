import {
  Advantages,
  CovidGifts,
  How,
  Faq,
  Glossary,
  Footer,
} from '../../../components';

import AccidentHero from '../accident-hero/AccidentHero';
import './AccidentHome.scss';

function AccidentHome({ data, pageStyle }) {
  return (
    <section style={pageStyle}>
      <AccidentHero></AccidentHero>
      <Advantages list={data.advantages} color={data.activeColor}></Advantages>
      <CovidGifts></CovidGifts>
      <How list={data.how} color={data.activeColor}></How>
      <Faq color={data.activeColor}></Faq>
      <Glossary></Glossary>
      <Footer></Footer>
    </section>
  );
}

export default AccidentHome;
