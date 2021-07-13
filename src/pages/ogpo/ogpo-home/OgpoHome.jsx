import {
  Advantages,
  Gifts,
  How,
  Faq,
  Glossary,
  Footer,
} from '../../../components';

import OgpoHero from '../ogpo-hero/OgpoHero';

import './OgpoHome.scss';

function OgpoHome({ data }) {
  const pageStyle = {
    backgroundColor: data.backgroundColor,
  };

  return (
    <section style={pageStyle}>
      <OgpoHero></OgpoHero>
      <Advantages list={data.advantages} color={data.activeColor}></Advantages>
      <Gifts isSelectable={false}></Gifts>
      <How list={data.how} color={data.activeColor}></How>
      <Faq color={data.activeColor}></Faq>
      <Glossary></Glossary>
      <Footer></Footer>
    </section>
  );
}

export default OgpoHome;
