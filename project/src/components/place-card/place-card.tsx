import {offersMocks} from '../../mocks/mock-types';
import {getRating, ucFirst} from '../../const';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type placeCardProps = {
  offer: offersMocks;
  setActive: (id: number | undefined) => void;
}

function PlaceCard ({offer, setActive}: placeCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type, isFavorite, id} = offer;
  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => setActive(id)}
      onMouseLeave={() => setActive(undefined)}
    >
      {isPremium ? <div className="place-card__mark"> <span>Premium</span> </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Room}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={isFavorite? 'place-card__bookmark-button place-card__bookmark-button--active button': 'place-card__bookmark-button button'} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Room}>{title}</Link>
        </h2>
        <p className="place-card__type">{ucFirst(type)}</p>
      </div>
    </article>);
}

export default PlaceCard;
