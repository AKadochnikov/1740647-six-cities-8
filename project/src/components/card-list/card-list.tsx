import PlaceCard from '../place-card/place-card';
import {Offers, Offer} from '../../types/types';

type cardListProps = {
  offers: Offers
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

function CardList ({offers, onMouseLeave, onMouseEnter}: cardListProps): JSX.Element {
  return (
    <>
      {offers.map((offerItem: Offer) => (
        <PlaceCard
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          key={offerItem.id}
          offerItem={offerItem}
        />
      ))}
    </>
  );
}

export default CardList;
