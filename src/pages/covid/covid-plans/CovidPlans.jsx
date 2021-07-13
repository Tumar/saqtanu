import CovidPlansItem from './CovidPlansItem/CovidPlansItem';

import { COVID_PLANS_DATA, COVID_PLANS_HEADERS } from './CovidPlans-data';

import './CovidPlans.scss';

function CovidPlans({ onPlanSelected }) {
  const plans = COVID_PLANS_DATA;
  const headerItems = COVID_PLANS_HEADERS;

  return (
    <section className='covid-plans'>
      <section className='container'>
        <div className='covid-plans__wrap'>
          <div className='covid-plans__header'>
            {headerItems.map((item, index) => {
              return (
                <div key={index} className='covid-plans__header-item t-caption'>
                  {item}
                </div>
              );
            })}
          </div>
          {plans.map((plan, planIndex) => {
            return (
              <CovidPlansItem
                plan={plan}
                key={planIndex}
                onPlanSelected={onPlanSelected}
              ></CovidPlansItem>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default CovidPlans;
