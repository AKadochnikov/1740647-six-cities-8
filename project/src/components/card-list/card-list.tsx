import PlaceCard from '../place-card/place-card';
import {offersMocks} from '../../mocks/mock-types';

type cardListProps = {
  offers: offersMocks[]
}

function CardList ({offers}: cardListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: offersMocks) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </>
  );
}

export default CardList;
