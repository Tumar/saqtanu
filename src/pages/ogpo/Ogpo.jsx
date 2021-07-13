import { Route, Switch, useRouteMatch } from 'react-router';
import { Helmet } from 'react-helmet';

import OgpoHome from './ogpo-home/OgpoHome';
import OgpoCalculator from './ogpo-calculator/OgpoCalculator';
import OgpoProposals from './ogpo-proposals/OgpoProposals';
import OgpoGifts from './ogpo-gifts/OgpoGifts';

import { OGPO_DATA } from './Ogpo-data';

import './Ogpo.scss';

function Ogpo({ onModalShow }) {
  const data = OGPO_DATA;

  let { path } = useRouteMatch();

  return (
    <>
      <Helmet>
        <title>ОГПО | Онлайн-маркет по страхованию "Saqtanu"</title>
        <meta
          name='description'
          content='ОГПО. Онлайн-маркет по страхованию "Saqtanu". Выберите страховку, которая подходит именно Вам!'
        />
      </Helmet>
      <Switch>
        <Route exact path={path}>
          <OgpoHome data={data}></OgpoHome>
        </Route>

        <Route path={`${path}/calculator`}>
          <OgpoCalculator onModalShow={onModalShow}></OgpoCalculator>
        </Route>

        <Route path={`${path}/proposals`}>
          <OgpoProposals
            proposals={data.proposals}
            onModalShow={onModalShow}
          ></OgpoProposals>
        </Route>

        <Route path={`${path}/gifts`}>
          <OgpoGifts></OgpoGifts>
        </Route>
      </Switch>
    </>
  );
}

export default Ogpo;
