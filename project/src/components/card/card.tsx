import {getRating, ucFirst} from '../../utils';
import {Link} from 'react-router-dom';
import {Offer, Offers} from '../../types/types';
import FavoriteButton from '../favorite-button/favorite-button';

type CardProps ={
  offer: Offer;
  isFavorites: boolean;
  offers: Offers;
}

function Card (props: CardProps):JSX.Element {
  const {offer, isFavorites, offers} = props;
  const {price, rating, id, title, type, isFavorite} = offer;
  return (
    <div className={isFavorites? 'favorites__card-info place-card__info': 'place-card__info'}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <FavoriteButton isFavorite={isFavorite} id={id} offers={offers}/>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${getRating(rating)}%`}} />
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${id}`}>{title}</Link>
      </h2>
      <p className="place-card__type">{ucFirst(type)}</p>
    </div>
  );
}

export default Card;
