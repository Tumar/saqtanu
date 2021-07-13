import { useHistory } from 'react-router';

import { Footer, Alert, Proposals,Users } from '../../../components';

import OgpoCars from '../ogpo-cars/OgpoCars';

import './OgpoProposals.scss';

function OgpoProposals({ proposals, onModalShow }) {
  const history = useHistory();
  const { users, cars, autoNumber } = history.location.state;

  const backToCalculator = () => {
    history.push('/ogpo/calculator', {
      users,
      cars,
      autoNumber,
    });
  };

  const onProposalSelect = (proposal) => {
    if (proposal.hasGift) {
      history.push('/ogpo/gifts');
    }
  };

  return (
    <section className='ogpo-inner'>
      <section className='container'>
        <Alert></Alert>

        <h3 className='color-white ogpo-inner__heading'>
          Предложения из разных страховых <br /> компаний с их плюшками
        </h3>

        <section className='ogpo-proposals__content'>
          <Proposals
            proposals={proposals}
            onModalShow={onModalShow}
            onSelect={onProposalSelect}
          ></Proposals>

          <div className='ogpo-proposals__form'>
            <h5 className='color-white'>Тимур Серикбай</h5>
            <div className='ogpo-proposals__lists'>
              <div className='ogpo-proposals__list'>
                <Users users={users}></Users>
              </div>
              <div className='ogpo-proposals__list'>
                <OgpoCars cars={cars}></OgpoCars>
              </div>
            </div>
            <button
              onClick={() => {
                backToCalculator();
              }}
              className='btn btn--fullsize btn--transparent-outline'
            >
              Вернуться и редактировать
            </button>
          </div>
        </section>
      </section>

      <Footer isDark={true}></Footer>
    </section>
  );
}

export default OgpoProposals;
