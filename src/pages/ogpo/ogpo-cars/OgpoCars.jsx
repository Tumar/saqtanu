import './OgpoCars.scss';

function OgpoCars({ cars }) {
  return cars?.length > 0
    ? cars.map((car, index) => {
        return (
          <div key={index} className='badge badge--blue'>
            <img
              className='badge__icon'
              src='/assets/icons/calculator/auto.svg'
              alt={car}
            />
            <span>{car}</span>
          </div>
        );
      })
    : '';
}

export default OgpoCars;
