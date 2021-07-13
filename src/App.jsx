import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { MODAL, Modal, MODALS } from './modals';
import {
  Accident,
  Covid,
  Home,
  Kasko,
  Ogpo,
  RealEstate,
  Travel,
  Oferta,
} from './pages';

import './App.scss';
import { Helmet } from 'react-helmet';

function App() {
  const [modals, setModals] = useState(MODALS);

  const onModalShow = (key, data = null) => {
    document.body.style.overflow = 'hidden';

    setModals(
      modals.map((modal) => {
        return { ...modal, isShown: key === modal.key, data };
      })
    );
  };

  const onModalClose = (key, data = null) => {
    document.body.style.overflow = '';

    setModals(
      modals.map((modal) => {
        return { ...modal, isShown: false };
      })
    );

    if (data?.showSuccess && key !== MODAL.SUCCESS) {
      onModalShow(MODAL.SUCCESS);
    }
  };

  return (
    <>
      <Helmet>
        <title>Онлайн-маркет по страхованию "Saqtanu"</title>
        <meta
          name='description'
          content='Выберите страховку, которая подходит именно Вам!'
        />
      </Helmet>
      <BrowserRouter>
        <Header onModalShow={onModalShow}></Header>
        <Switch>
          <Route exact path='/'>
            <Home onModalShow={onModalShow} />
          </Route>
          <Route path='/accident'>
            <Accident onModalShow={onModalShow} />
          </Route>
          <Route path='/covid'>
            <Covid onModalShow={onModalShow} />
          </Route>
          <Route path='/kasko'>
            <Kasko onModalShow={onModalShow} />
          </Route>
          <Route path='/ogpo'>
            <Ogpo onModalShow={onModalShow} />
          </Route>
          <Route path='/real-estate'>
            <RealEstate onModalShow={onModalShow} />
          </Route>
          <Route path='/travel'>
            <Travel onModalShow={onModalShow} />
          </Route>
          <Route path='/oferta'>
            <Oferta onModalShow={onModalShow} />
          </Route>
        </Switch>
        <Modal modals={modals} onModalClose={onModalClose}></Modal>
      </BrowserRouter>
    </>
  );
}

export default App;
