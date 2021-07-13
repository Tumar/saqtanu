import {
  Advantages,
  Gifts,
  How,
  Faq,
  Glossary,
  Footer,
  Partners,
} from '../../../components';

import KaskoHero from '../kasko-hero/KaskoHero';

import './KaskoHome.scss';

function KaskoHome({ data }) {
  return (
    <>
      <KaskoHero></KaskoHero>
      <Partners></Partners>
      <Advantages list={data.advantages} color={data.activeColor}></Advantages>
      <Gifts isSelectable={false}></Gifts>
      <How list={data.how} color={data.activeColor}></How>
      <Faq color={data.activeColor}></Faq>
      <Glossary></Glossary>

      <Footer></Footer>
    </>
  );
}

export default KaskoHome;
