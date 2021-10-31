import PlaceCard from '../place-card/place-card';
import {Offer} from '../../types/types';

type cardListProps = {
  offers: Offer[]
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
