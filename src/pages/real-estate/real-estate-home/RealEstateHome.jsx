import {
  Advantages,
  CovidGifts,
  How,
  Faq,
  Glossary,
  Footer,
} from '../../../components';

import RealEstateHero from '../real-estate-hero/RealEstateHero';

import './RealEstateHome.scss';

function RealEstateHome({ data, pageStyle }) {
  return (
    <section style={pageStyle} className='Covid'>
      <RealEstateHero></RealEstateHero>
      <Advantages list={data.advantages} color={data.activeColor}></Advantages>
      <CovidGifts></CovidGifts>
      <How list={data.how} color={data.activeColor}></How>
      <Faq color={data.activeColor}></Faq>
      <Glossary></Glossary>
      <Footer></Footer>
    </section>
  );
}

export default RealEstateHome;
