import {offersMocks} from '../../mocks/mock-types';

type placeCardProps = {
  offer: offersMocks;
}

const ucFirst = (str: string): string => {
  if (!str){
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
};

function PlaceCard ({offer}: placeCardProps): JSX.Element {
  const {isPremium, previewImage, price, rating, title, type} = offer;
  return (
    <article className="cities__place-card place-card">
      {isPremium ? <div className="place-card__mark"> <span>Premium</span> </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '50%'}} />
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{ucFirst(type)}</p>
      </div>
    </article>);
}

export default PlaceCard;
