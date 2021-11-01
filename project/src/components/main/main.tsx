import Logo from '../logo/logo';
import Map from '../map/map';
import CardList from '../card-list/card-list';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useState} from 'react';
import {ActiveOfferId} from '../../types/types';
import CityList from '../city-list/city-list';
import {ConnectedProps, connect} from 'react-redux';
import {State} from '../../types/state';

const mapStateToProps = ({city, filteredOffers}: State) => ({
  city,
  filteredOffers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Main (props: ConnectedComponentProps): JSX.Element {
  const {city, filteredOffers} = props;

  const [activeOfferId, setActiveOfferId] = useState<ActiveOfferId>({
    id: null,
  });

  const handleOfferMouseEnter = (id: number) => {
    setActiveOfferId({id});
  };

  const handleOfferMouseLeave = () => {
    setActiveOfferId({id: null});
  };

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"/>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"
            />
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            />
          </symbol>
        </svg>
      </div>
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.SignIn}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <ul className="locations__list tabs__list">
                <CityList city={city}/>
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className={`cities__places-container ${filteredOffers.length > 0? 'cities__places-container--empty': ''} container`}>
              {filteredOffers.length > 0?
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{filteredOffers.length} places to stay in {city}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                Popular
                      <svg className="places__sorting-arrow" width={7} height={4}>
                        <use xlinkHref="#icon-arrow-select"/>
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                  </form>
                  <div className="cities__places-list places__list tabs__content">
                    <CardList
                      onMouseEnter={handleOfferMouseEnter}
                      onMouseLeave={handleOfferMouseLeave}
                      offers={filteredOffers}
                    />
                  </div>
                </section> :
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property available at the moment in {city}
                    </p>
                  </div>
                </section>}
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map activeOffer={activeOfferId}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>);
}

export {Main};
export default connector(Main);
