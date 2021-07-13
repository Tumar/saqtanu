import { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollContainer from 'react-indiana-drag-scroll';

import { HOME_HERO_TABS } from './HomeHero-data';

import './HomeHero.scss';

function HomeHero() {
  const tabs = HOME_HERO_TABS;
  const [currentTab, setTab] = useState('auto');

  return (
    <section className='home-hero'>
      <section className='container'>
        <div className='home-hero__heading'>
          <h1 className='color-white'>Онлайн - Маркет по страхованию</h1>
          <div className='t-large'>Выберите страховку которая вам нужна</div>
        </div>
      </section>

      <section className='tabset'>
        <ScrollContainer className='home-hero__tabset'>
          <div className='container'>
            <div className='tabset__nav'>
              {tabs.map((tab, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setTab(tab.id);
                    }}
                    className={`btn btn--white tabset__button ${
                      currentTab === tab.id ? 'active' : ''
                    }`}
                  >
                    {tab.icon ? (
                      <img
                        className='tabset__icon'
                        src={tab.icon}
                        alt={tab.label}
                      />
                    ) : (
                      ''
                    )}
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollContainer>
        <section className='container'>
          <div className='tabset__body'>
            {tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  className={`tabset__item ${
                    tab.id === currentTab ? 'tabset__item--active' : ''
                  }`}
                >
                  {tab.children.map((child, childIndex) => {
                    return (
                      <div className='tabset__card' key={childIndex}>
                        <div className='tabset__header'>
                          <img
                            className='tabset__image'
                            src={child.image}
                            alt={child.title}
                          />
                          <h4>{child.title}</h4>
                        </div>
                        {child.description ? (
                          <p
                            className='t-large'
                            dangerouslySetInnerHTML={{
                              __html: child.description,
                            }}
                          ></p>
                        ) : (
                          ''
                        )}
                        <Link className="btn btn--primary" to={child.href}>Рассчитать от {child.price}</Link>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </section>
  );
}

export default HomeHero;
