import {Link} from 'react-router-dom';
import {Offer, Offers} from '../../types/types';
import Card from '../card/card';


type favoriteCardProps = {
  offerItem: Offer;
  isFavorites: boolean;
  offers: Offers;
}

function FavoritesCard(props: favoriteCardProps): JSX.Element {
  const {offerItem, isFavorites, offers} = props;
  const {previewImage, id} = offerItem;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={150} height={110} alt="Place image" />
        </Link>
      </div>
      <Card offer={offerItem} isFavorites={isFavorites} offers={offers}/>
    </article>
  );
}

export default FavoritesCard;
