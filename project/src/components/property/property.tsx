import Logo from '../logo/logo';
import {Redirect} from 'react-router-dom';
import {AppRoute, IS_FAVORITES, AuthorizationStatus} from '../../const';
import FormReview from '../form-review/form-review';
import {useParams} from 'react-router-dom';
import NearPlacesCardList from '../near-places-card-list/near-places-card-list';
import {getRating, ucFirst} from '../../utils';
import {ThunkAppDispatch} from '../../types/action';
import {fetchPropertyDataAction} from '../../store/api-actions';
import {State} from '../../types/state';
import {getCity, getActiveOffer, getNearbyOffers, getIsPropertyDataLoaded, getSortedComments} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/authorization/selectors';
import {connect, ConnectedProps} from 'react-redux';
import {useEffect} from 'react';
import Loading from '../loading/loading';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import Logged from '../logged/logged';
import NotLogged from '../not-logged/not-logged';
import {Params} from '../../types/types';
import {Category} from '../../const';
import FavoriteButton from '../favorite-button/favorite-button';

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  fetchPropertyData(id: number) {
    dispatch(fetchPropertyDataAction(id));
  },
});

const mapStateToProps = (state: State) => ({
  city: getCity(state),
  authorizationStatus: getAuthorizationStatus(state),
  activeOffer: getActiveOffer(state),
  comments: getSortedComments(state),
  nearbyOffers: getNearbyOffers(state),
  isPropertyDataLoaded: getIsPropertyDataLoaded(state),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function Property (props: PropsFromRedux): JSX.Element {
  const {fetchPropertyData, activeOffer, comments, nearbyOffers, isPropertyDataLoaded, authorizationStatus} = props;
  const params: Params = useParams();
  const currentId = Number(params.id);

  useEffect(() => fetchPropertyData(currentId), [currentId, fetchPropertyData]);

  if (!isPropertyDataLoaded) {
    return (
      <Loading/>
    );
  }

  if(activeOffer === null) {
    return (<Redirect to={AppRoute.NotFound}/>);
  }

  const {images, isPremium, title, bedrooms, rating, isFavorite, type, maxAdults, price, goods, host, description} = activeOffer;
  const offersToMap = [...nearbyOffers, activeOffer];

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
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ? <div className="property__mark"> <span>Premium</span> </div> : ''}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <FavoriteButton isFavorite={isFavorite} id={currentId} offers={null} category={Category.Room}/>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${getRating(rating)}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {ucFirst(type)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">€{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good) => <li key={good} className="property__inside-item">{good}</li>)}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width={74} height={74} alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                    {host.isPro ? <span className="property__user-status">Pro</span> : ''}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <ReviewsList comments={comments}/>
                  {authorizationStatus === AuthorizationStatus.Auth? <FormReview id={currentId}/> : ''}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map activeOffer={activeOffer} offers={offersToMap}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <NearPlacesCardList offers={nearbyOffers} isFavorites={IS_FAVORITES.not} category={Category.Nearby}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>);
}

export default connector(Property);
