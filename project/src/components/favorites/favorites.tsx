import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import FavoritesList from '../favorites-list/favorites-list';
import {AppRoute, AuthorizationStatus} from '../../const';
import {IS_FAVORITES} from '../../const';
import {ThunkAppDispatch} from '../../types/action';
import {fetchFavoritesDataAction} from '../../store/api-actions';
import {State} from '../../types/state';
import {getFavoriteOffers, getIsFavoriteDataLoaded} from '../../store/data/selectors';
import {connect, ConnectedProps} from 'react-redux';
import Loading from '../loading/loading';
import {useEffect} from 'react';
import {resetIsFavoriteDataLoaded} from '../../store/actions';
import Logged from '../logged/logged';
import NotLogged from '../not-logged/not-logged';
import {getAuthorizationStatus} from '../../store/authorization/selectors';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchFavoritesData() {
    dispatch(resetIsFavoriteDataLoaded());
    dispatch(fetchFavoritesDataAction());
  },
});

const mapStateToProps = (state: State) => ({
  favoriteOffers: getFavoriteOffers(state),
  isFavoriteDataLoaded: getIsFavoriteDataLoaded(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Favorites(props: PropsFromRedux):JSX.Element {
  const {favoriteOffers, isFavoriteDataLoaded, fetchFavoritesData, authorizationStatus} = props;

  useEffect(() => fetchFavoritesData(), [fetchFavoritesData]);

  if (!isFavoriteDataLoaded) {
    return (
      <Loading/>
    );
  }

  const Cities: Set<string> = new Set();
  favoriteOffers.forEach((offerItem) => Cities.add(offerItem.city.name));
  return (
    <div>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page">
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
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {[...Cities].map((city) => (
                  <FavoritesList key={`${city}_1`} city={city} offers={favoriteOffers} isFavorites={IS_FAVORITES.yes}/>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Main}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width={64} height={33} />
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default connector(Favorites);
