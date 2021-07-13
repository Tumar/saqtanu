import { Route, Switch, useRouteMatch } from 'react-router';
import { Helmet } from 'react-helmet';

import { KASKO_DATA } from './Kasko-data';

import KaskoCalculator from './kasko-calculator/KaskoCalculator';
import KaskoHome from './kasko-home/KaskoHome';

import './Kasko.scss';

function Kasko({ onModalShow }) {
  const data = KASKO_DATA;

  const pageStyle = {
    backgroundColor: data.backgroundColor,
  };

  let { path } = useRouteMatch();

  return (
    <section style={pageStyle} className='Kasko'>
      <Helmet>
        <title>КАСКО | Онлайн-маркет по страхованию "Saqtanu"</title>
        <meta
          name='description'
          content='КАСКО. Онлайн-маркет по страхованию "Saqtanu". Выберите страховку, которая подходит именно Вам!'
        />
      </Helmet>
      <Switch>
        <Route exact path={path}>
          <KaskoHome data={data}></KaskoHome>
        </Route>

        <Route path={`${path}/calculator`}>
          <KaskoCalculator onModalShow={onModalShow}></KaskoCalculator>
        </Route>
      </Switch>
    </section>
  );
}

export default Kasko;
