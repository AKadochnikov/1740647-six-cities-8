import {Link} from 'react-router-dom';
import {Offer} from '../../types/types';
import Card from '../card/card';


type favoriteCardProps = {
  offerItem: Offer;
  isFavorites: boolean;
}

function FavoritesCard(props: favoriteCardProps): JSX.Element {
  const {offerItem, isFavorites} = props;
  const {previewImage, id} = offerItem;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={150} height={110} alt="Place image" />
        </Link>
      </div>
      <Card offer={offerItem} isFavorites={isFavorites}/>
    </article>
  );
}

export default FavoritesCard;
