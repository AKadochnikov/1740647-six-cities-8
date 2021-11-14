import {Link} from 'react-router-dom';
import {Offer, Offers} from '../../types/types';
import Card from '../card/card';

type PlaceCardProps = {
  offerItem: Offer;
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
  isFavorites: boolean;
  offers: Offers;
  category: string;
}

function PlaceCard (props: PlaceCardProps): JSX.Element {
  const {offerItem, onMouseEnter, onMouseLeave, isFavorites, offers, category} = props;
  const {isPremium, previewImage,id} = offerItem;
  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={() => onMouseLeave()}
    >
      {isPremium ? <div className="place-card__mark"> <span>Premium</span> </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <Card offer={offerItem} isFavorites={isFavorites} offers={offers} category={category}/>
    </article>);
}

export default PlaceCard;
