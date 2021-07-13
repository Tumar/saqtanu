import { useState } from 'react';
import { useHistory } from 'react-router';
import InputRange from 'react-input-range';
import NumberFormat from 'react-number-format';

import { Footer, Proposals } from '../../../components';
import { MODAL } from '../../../modals';
import CheckboxIcon from './checkbox.svg';

import './RealEstateProposals.scss';

function RealEstateProposals({ proposals, onModalShow, pageStyle }) {
  const history = useHistory();

  const onProposalSelect = (proposal) => {
    const plan = {
      img: proposal.image,
      title: proposal.title,
      price: proposal.price,
    };

    onModalShow(MODAL.ACCIDENT, { plan });
  };

  const [form, setForm] = useState({
    address: history?.location.state.address || '',
    decoration: 300000,
    properties: 0,
    compensation: 0,
    isForRent: false,
    isRepairsPlanning: false,
    isNonResidential: false,
  });

  const rangeGroups = [
    {
      label:
        'Внутренняя отделка недвижимости (потолочное, настенное и напольноепокрытия, двери, сантехника)',
      key: 'decoration',
      rangeConfig: {
        min: 0,
        max: 10000000,
        step: 300000,
        multiplier: 2000,
      },
    },
    {
      label:
        'Движимое имущество (бытовая техника, мебель, предметы интерьера, электроника)',
      key: 'properties',
      rangeConfig: {
        min: 0,
        max: 6000000,
        step: 300000,
        multiplier: 2000,
      },
    },
    {
      label: 'Возмещение соседям (затопление, пожар и пр)',
      key: 'compensation',
      rangeConfig: {
        min: 0,
        max: 6000000,
        step: 300000,
        multiplier: 2000,
      },
    },
  ];

  const [addingAmount, setAddingAmount] = useState(0);

  const amountChangeHandler = (amount, key) => {
    setForm({ ...form, [key]: amount });

    let totalAddingAmount = 0;

    rangeGroups.forEach((group) => {
      totalAddingAmount +=
        (form[group.key] / group.rangeConfig.step - 1) *
        group.rangeConfig.multiplier;
    });

    setAddingAmount(totalAddingAmount);
  };

  const checkboxGroups = [
    {
      label: 'Сдается в аренду',
      key: 'isForRent',
    },
    {
      label: 'Планируется ремонт',
      key: 'isRepairsPlanning',
    },
    {
      label: 'Нежилое помещение',
      key: 'isNonResidential',
    },
  ];

  const renderRangeGroup = ({ label, key, rangeConfig }) => {
    return (
      <div className='form-group form-group--fullsize'>
        <label>{label}</label>
        <h6 className='real-estate-proposals__amount'>
          <NumberFormat
            thousandSeparator={' '}
            thousandsGroupStyle='thousand'
            suffix={' ₸'}
            value={form[key]}
            displayType={'text'}
          ></NumberFormat>
        </h6>

        <InputRange
          step={rangeConfig.step}
          maxValue={rangeConfig.max}
          minValue={rangeConfig.min}
          value={form[key]}
          onChange={(value) => {
            amountChangeHandler(value, key);
          }}
        />
      </div>
    );
  };

  const renderCheckboxGroup = ({ label, key }) => {
    return (
      <div className='form-group'>
        <div className='checkbox'>
          <input
            id={key}
            type='checkbox'
            name={key}
            checked={form[key]}
            onChange={(event) => {
              setForm({ ...form, [key]: !form[key] });
            }}
          />
          <label htmlFor={key}>
            <img src={CheckboxIcon} alt='Выбрать' />
          </label>
          <span className='checkbox__text'>{label}</span>
        </div>
      </div>
    );
  };

  return (
    <section style={pageStyle} className='real-estate-proposals'>
      <section className='container'>
        <h3 className='real-estate-proposals__heading'>
          Расчет по страхованию <br /> недвижимости
        </h3>

        <section className='real-estate-proposals__content'>
          <div className='real-estate-proposals__form'>
            <div className='form-group form-group--fullsize'>
              <input
                type='text'
                name='address'
                placeholder='Адрес'
                value={form.address}
                onChange={(event) => {
                  setForm({ ...form, address: event.target.value });
                }}
              />
            </div>

            <h5 className='real-estate-proposals__title'>Застраховать</h5>

            {rangeGroups.map((group) => {
              return renderRangeGroup(group);
            })}

            <div className='real-estate-proposals__checkboxes'>
              {checkboxGroups.map((group) => {
                return renderCheckboxGroup(group);
              })}
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

export default RealEstateProposals;
