import PlaceCard from '../place-card/place-card';
import {offer} from '../../types/types';

type cardListProps = {
  offers: offer[]
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

function CardList ({offers, onMouseLeave, onMouseEnter}: cardListProps): JSX.Element {
  return (
    <>
      {offers.map((offerItem: offer) => (
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
