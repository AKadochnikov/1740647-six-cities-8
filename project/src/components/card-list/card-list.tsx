import PlaceCard from '../place-card/place-card';
import {offersMocks} from '../../mocks/mock-types';
import {useState} from 'react';

type cardListProps = {
  offers: offersMocks[]
}

function CardList ({offers}: cardListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<number | undefined>();

  // eslint-disable-next-line no-console
  console.log(activeCard);
  return (
    <>
      {offers.map((offer: offersMocks) => (
        <PlaceCard
          setActive={setActiveCard}
          key={offer.id}
          offer={offer}
        />
      ))}
    </>
  );
}

export default CardList;
