import {
  Advantages,
  Gifts,
  How,
  Faq,
  Glossary,
  Footer,
  Partners
} from '../../components';

import HomeHero from './home-hero/HomeHero';

import { HOME_DATA } from './Home-data';

import './Home.scss';

function Home() {
  const data = HOME_DATA;

  const pageStyle = {
    backgroundColor: data.backgroundColor,
  };

  return (
    <section style={pageStyle} className='Home'>
      <HomeHero></HomeHero>
      <Partners></Partners>
      <Advantages list={data.advantages} color={data.activeColor}></Advantages>
      <Gifts isSelectable={false}></Gifts>
      <How list={data.how} color={data.activeColor}></How>
      <Faq color={data.activeColor}></Faq>
      <Glossary></Glossary>
      <Footer></Footer>
    </section>
  );
}

export default Home;
