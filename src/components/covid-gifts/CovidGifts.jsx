import { useEffect, useState } from 'react';

import Hammer from 'react-hammerjs';

import { COVID_GIFTS_DATA, GIFTS_GAP } from './CovidGifts-data';

import './CovidGifts.scss';

const DIRECTION = {
  LEFT: 2,
  RIGHT: 4,
};

const BREAKPOINT = 960;

function CovidGifts({ isSelectable }) {
  const list = COVID_GIFTS_DATA;

  const listBaseWidth = `${list.length * 100}%`;
  const listWidthWithGaps = `calc(${listBaseWidth} + ${
    list.length * GIFTS_GAP
  }px)`;

  const [listWidth, setListWidth] = useState(
    window.innerWidth < BREAKPOINT ? listBaseWidth : listWidthWithGaps
  );

  const [state, setState] = useState({
    activeIndex: 0,
    listTransform: `translate(${0}%)`,
  });

  const handleSwipe = (event) => {
    let newIndex;

    switch (event.direction) {
      case DIRECTION.RIGHT:
        newIndex = state.activeIndex - 1;
        break;
      case DIRECTION.LEFT:
        newIndex = state.activeIndex + 1;
        break;
      default:
        newIndex = state.activeIndex;
        break;
    }

    if (newIndex < 0 || newIndex >= list.length) {
      return;
    }

    setState({
      activeIndex: newIndex,
      listTransform: `translate(${(newIndex * -100) / list.length}%)`,
    });
  };

  const listStyle = () => {
    return {
      width: listWidth,
      transform: state.listTransform,
    };
  };

  useEffect(() => {
    const resizeListener = () => {
      setListWidth(
        window.innerWidth < BREAKPOINT ? listBaseWidth : listWidthWithGaps
      );
    };

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [listWidth, listBaseWidth, listWidthWithGaps]);

  return (
    <section className='gifts'>
      <div className='gifts__container'>
        <Hammer onSwipe={handleSwipe}>
          <div style={listStyle()} className='gifts__list'>
            {list.map((gift, index) => {
              let itemStyle = {
                color: gift.textColor,
                width: `${100 / list.length}%`,
              };

              if (gift.backgroundColor) {
                itemStyle.backgroundColor = gift.backgroundColor;
              }

              if (gift.backgroundImage) {
                itemStyle.backgroundImage = `url(${gift.backgroundImage})`;
              }

              const titleStyle = {
                color: gift.textColor,
              };

              return (
                <div key={index} className='gifts__item covid-gifts__item' style={itemStyle}>
                  <article className='covid-gifts__article'>
                    <h3
                      style={titleStyle}
                      dangerouslySetInnerHTML={{
                        __html: gift.title,
                      }}
                    ></h3>
                    <button className='btn btn--primary'>
                      Оставить заявку
                    </button>
                  </article>
                </div>
              );
            })}
          </div>
        </Hammer>
      </div>
    </section>
  );
}

export default CovidGifts;
