import {getRating} from '../../const';
import {Link, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {ucFirst} from '../../const';
import {offerMock} from '../../types/types';

type nearPlacesCardProps = {
  offer: offerMock;
}

function NearPlacesCard ({offer}: nearPlacesCardProps): JSX.Element {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const {id, previewImage, price, isFavorite, rating, type, title} = offer;
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{ucFirst(type)}</p>
      </div>
    </article>
  );
}

export default NearPlacesCard;
