import Logo from '../logo/logo';
import Map from '../map/map';
import CardList from '../card-list/card-list';
import {AuthorizationStatus, IS_FAVORITES} from '../../const';
import CityList from '../city-list/city-list';
import {ConnectedProps, connect} from 'react-redux';
import {State} from '../../types/state';
import Logged from '../logged/logged';
import NotLogged from '../not-logged/not-logged';
import {useActiveOffer} from '../../hooks/useActiveOffer';
import {getActiveSortBy, getCity, getSortedOffers} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/authorization/selectors';
import SortList from '../sort-list/sort-list';
import {useState} from 'react';
import {Category} from '../../const';

const mapStateToProps = (state: State) => ({
  city: getCity(state),
  activeSortBy: getActiveSortBy(state),
  filteredOffers: getSortedOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Main (props: ConnectedComponentProps): JSX.Element {
  const {city, filteredOffers, authorizationStatus, activeSortBy} = props;
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const [handleOfferMouseEnter, handleOfferMouseLeave, activeOfferId] = useActiveOffer();

  const handleOpenList = () => {
    setIsOpened(!isOpened);
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
                  {authorizationStatus === AuthorizationStatus.Auth? <Logged/> : <NotLogged/>}
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
                  <form onClick={() => handleOpenList()} className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                      {activeSortBy}
                      <svg className="places__sorting-arrow" width={7} height={4}>
                        <use xlinkHref="#icon-arrow-select"/>
                      </svg>
                    </span>
                    <SortList isOpened={isOpened}/>
                  </form>
                  <div className="cities__places-list places__list tabs__content">
                    <CardList
                      onMouseEnter={handleOfferMouseEnter}
                      onMouseLeave={handleOfferMouseLeave}
                      offers={filteredOffers}
                      isFavorites={IS_FAVORITES.not}
                      category={Category.Main}
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
                  <Map activeOffer={activeOfferId} offers={filteredOffers}/>
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
