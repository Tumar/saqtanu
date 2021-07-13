import { Route, Switch, useRouteMatch } from 'react-router';
import { Helmet } from 'react-helmet';

import AccidentHome from './accident-home/AccidentHome';
import AccidentProposals from './accident-proposals/AccidentProposals';

import { ACCIDENT_DATA } from './Accident-data';
import './Accident.scss';

function Accident({ onModalShow }) {
  const data = ACCIDENT_DATA;

  const pageStyle = {
    backgroundColor: data.backgroundColor,
  };

  let { path } = useRouteMatch();

  return (
    <>
      <Helmet>
        <title>
          Страхование от несчастных случаев | Онлайн-маркет по страхованию
          "Saqtanu"
        </title>
        <meta
          name='description'
          content='Страхование от несчастных случаев. Онлайн-маркет по страхованию "Saqtanu". Выберите страховку, которая подходит именно Вам!'
        />
      </Helmet>
      <Switch>
        <Route exact path={path}>
          <AccidentHome data={data} pageStyle={pageStyle}></AccidentHome>
        </Route>

        <Route path={`${path}/proposals`}>
          <AccidentProposals
            pageStyle={pageStyle}
            proposals={data.proposals}
            onModalShow={onModalShow}
          ></AccidentProposals>
        </Route>
      </Switch>
    </>
  );
}

export default Accident;
