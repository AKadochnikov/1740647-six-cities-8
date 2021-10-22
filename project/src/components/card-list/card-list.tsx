import PlaceCard from '../place-card/place-card';
import {offersMocks} from '../../mocks/mock-types';

type cardListProps = {
  offers: offersMocks[]
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

function CardList ({offers, onMouseLeave, onMouseEnter}: cardListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: offersMocks) => (
        <PlaceCard
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          key={offer.id}
          offer={offer}
        />
      ))}
    </>
  );
}

export default CardList;
