import {Offers} from '../../types/types';
type FavoriteButtonProps = {
  isFavorite: boolean;
  id: number;
  offers: Offers;
}

function FavoriteButton (props: FavoriteButtonProps): JSX.Element {
  const {isFavorite, id, offers} = props;
  return (
    <button className={`place-card__bookmark-button ${isFavorite? 'place-card__bookmark-button--active': ''} button`} type="button">
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export {FavoriteButton};
export default FavoriteButton;
