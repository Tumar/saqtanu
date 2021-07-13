import { Route, Switch, useRouteMatch } from 'react-router';
import { Helmet } from 'react-helmet';

import TravelHome from './travel-home/TravelHome';
import TravelProposals from './travel-proposals/TravelProposals';

import { TRAVEL_ESTATE_DATA } from './Travel-data';
import './Travel.scss';

function Travel({ onModalShow }) {
  const data = TRAVEL_ESTATE_DATA;

  const pageStyle = {
    backgroundColor: data.backgroundColor,
  };

  let { path } = useRouteMatch();

  return (
    <>
      <Helmet>
        <title>
          Страхование путешествий | Онлайн-маркет по страхованию "Saqtanu"
        </title>
        <meta
          name='description'
          content='Страхование путешествий. Онлайн-маркет по страхованию "Saqtanu". Выберите страховку, которая подходит именно Вам!'
        />
      </Helmet>
      <Switch>
        <Route exact path={path}>
          <TravelHome data={data} pageStyle={pageStyle}></TravelHome>
        </Route>

        <Route path={`${path}/proposals`}>
          <TravelProposals
            pageStyle={pageStyle}
            proposals={data.proposals}
            onModalShow={onModalShow}
          ></TravelProposals>
        </Route>
      </Switch>
    </>
  );
}

export default Travel;
