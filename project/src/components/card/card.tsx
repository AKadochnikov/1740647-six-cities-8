import {getRating, ucFirst} from '../../utils';
import {Link} from 'react-router-dom';
import {Offer} from '../../types/types';

type CardProps ={
  offer: Offer;
  isFavorites: boolean;
}

function Card (props: CardProps):JSX.Element {
  const {offer, isFavorites} = props;
  const {price, rating, id, title, type, isFavorite} = offer;
  return (
    <div className={isFavorites? 'favorites__card-info place-card__info': 'place-card__info'}>
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button ${isFavorite? 'place-card__bookmark-button--active': ''} button`} type="button">
          <svg className="place-card__bookmark-icon" width={18} height={19}>
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
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
