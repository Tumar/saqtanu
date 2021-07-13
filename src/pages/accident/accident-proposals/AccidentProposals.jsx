import { useState } from 'react';
import { useHistory } from 'react-router';

import InputRange from 'react-input-range';
import NumberFormat from 'react-number-format';

import { Footer, Proposals } from '../../../components';
import { MODAL } from '../../../modals';

import './AccidentProposals.scss';

function AccidentProposals({ proposals, onModalShow, pageStyle }) {
  const history = useHistory();

  const onProposalSelect = (proposal) => {
    const plan = {
      img: proposal.image,
      title: proposal.title,
      price: proposal.price,
    };

    onModalShow(MODAL.ACCIDENT, { plan });
  };

  const rangeConfig = {
    min: 500000,
    max: 3500000,
    step: 500000,
    multiplier: 1500,
  };

  const amountChangeHandler = (amount) => {
    const newAddingAmount =
      (amount / rangeConfig.step - 1) * rangeConfig.multiplier;
    setAddingAmount(newAddingAmount);
    setForm({ ...form, amount });
  };

  const [form, setForm] = useState({
    age: history?.location.state.age || '',
    city: '',
    amount: 500000,
  });

  const [addingAmount, setAddingAmount] = useState(0);

  return (
    <section style={pageStyle} className='accident-proposals'>
      <section className='container'>
        <h3 className='accident-proposals__heading'>
          Страхование <br /> от несчастных случаев
        </h3>

        <section className='accident-proposals__content'>
          <div className='accident-proposals__form'>
            <div className='form-group form-group--fullsize'>
              <input
                type='text'
                name='age'
                placeholder='Возраст'
                value={form.age}
                onChange={(event) => {
                  setForm({ ...form, age: event.target.value });
                }}
              />
            </div>
            <div className='form-group form-group--fullsize'>
              <input
                type='text'
                name='city'
                placeholder='Город'
                value={form.city}
                onChange={(event) => {
                  setForm({ ...form, city: event.target.value });
                }}
              />
            </div>
            <div className='form-group form-group--fullsize'>
              <label htmlFor='range'>Страховая сумма</label>
              <h6 className='accident-proposals__amount'>
                <NumberFormat
                  thousandSeparator={' '}
                  thousandsGroupStyle='thousand'
                  suffix={' ₸'}
                  value={form.amount}
                  displayType={'text'}
                ></NumberFormat>
              </h6>

              <InputRange
                step={rangeConfig.step}
                maxValue={rangeConfig.max}
                minValue={rangeConfig.min}
                value={form.amount}
                onChange={amountChangeHandler}
              />
            </div>
          </div>

          <Proposals
            addAmount={addingAmount}
            proposals={proposals}
            onModalShow={onModalShow}
            onSelect={onProposalSelect}
          ></Proposals>
        </section>
      </section>

      <Footer></Footer>
    </section>
  );
}

export default AccidentProposals;
