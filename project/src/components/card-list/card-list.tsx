import PlaceCard from '../place-card/place-card';
import {offerMock} from '../../types/types';

type cardListProps = {
  offers: offerMock[]
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
}

function CardList ({offers, onMouseLeave, onMouseEnter}: cardListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: offerMock) => (
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
