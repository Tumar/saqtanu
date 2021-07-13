import { GIFTS_DATA, GIFTS_GAP } from './Gifts-data';

import Hammer from 'react-hammerjs';

import './Gifts.scss';
import { useEffect, useState } from 'react';
import GiftsItem from './gifts-item/GiftsItem';

const DIRECTION = {
  LEFT: 2,
  RIGHT: 4,
};

const BREAKPOINT = 960;

function Gifts({ isSelectable }) {
  const [list, setList] = useState(GIFTS_DATA);

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
    dotStyle: {
      backgroundColor: list[0].navigationColor,
    },
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
      dotStyle: {
        backgroundColor: list[newIndex].navigationColor,
      },
    });
  };

  const listStyle = () => {
    return {
      width: listWidth,
      transform: state.listTransform,
    };
  };

  const onGiftSelect = (gift) => {
    setList(
      list.map((item) => {
        item.isDisabled = item.id !== gift.id;
        return item;
      })
    );
  };

  const onGiftUnselect = (gift) => {
    setList(
      list.map((item) => {
        item.isDisabled = false;
        return item;
      })
    );
  };

  const selectableListStyle = {
    flexDirection: 'column',
    cursor: 'default',
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

  const renderList = () => {
    return (
      <div
        style={isSelectable ? selectableListStyle : listStyle()}
        className='gifts__list'
      >
        {list.map((gift, index) => {
          return (
            <GiftsItem
              key={index}
              index={index}
              gift={gift}
              isSelectable={isSelectable}
              listLength={list.length}
              onToggle={(isSelected) => {
                if (isSelected) {
                  onGiftSelect(gift);
                } else {
                  onGiftUnselect();
                }
              }}
            ></GiftsItem>
          );
        })}
      </div>
    );
  };

  return (
    <section className='gifts'>
      <div
        className='gifts__container'
        style={isSelectable ? { padding: 0 } : {}}
      >
        {isSelectable ? (
          renderList()
        ) : (
          <>
            <Hammer onSwipe={handleSwipe}>{renderList()}</Hammer>
            <div className='gifts__nav'>
              {list.map((gift, index) => {
                return (
                  <span
                    key={index}
                    style={state.dotStyle}
                    className={`gifts__dot ${
                      state.activeIndex === index ? 'active' : ''
                    }`}
                  ></span>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Gifts;
