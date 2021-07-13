import { Route, Switch, useRouteMatch } from 'react-router';
import { Helmet } from 'react-helmet';

import RealEstateHome from './real-estate-home/RealEstateHome';
import RealEstateProposals from './real-estate-proposals/RealEstateProposals';

import { REAL_ESTATE_DATA } from './RealEstate-data';
import './RealEstate.scss';

function RealEstate({ onModalShow }) {
  const data = REAL_ESTATE_DATA;

  const homePageStyle = {
    backgroundColor: data.backgroundColor,
  };

  const proposalsPageStyle = {
    backgroundColor: data.proposalsBackgroundColor,
  };

  let { path } = useRouteMatch();

  return (
    <>
      <Helmet>
        <title>
          Страхование недвижимости | Онлайн-маркет по страхованию "Saqtanu"
        </title>
        <meta
          name='description'
          content='Страхование недвижимости. Онлайн-маркет по страхованию "Saqtanu". Выберите страховку, которая подходит именно Вам!'
        />
      </Helmet>
      <Switch>
        <Route exact path={path}>
          <RealEstateHome
            data={data}
            pageStyle={homePageStyle}
          ></RealEstateHome>
        </Route>

        <Route path={`${path}/proposals`}>
          <RealEstateProposals
            pageStyle={proposalsPageStyle}
            proposals={data.proposals}
            onModalShow={onModalShow}
          ></RealEstateProposals>
        </Route>
      </Switch>
    </>
  );
}

export default RealEstate;
