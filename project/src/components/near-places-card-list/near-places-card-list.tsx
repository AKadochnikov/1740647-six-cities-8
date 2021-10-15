import {offersMocks} from '../../mocks/mock-types';
import NearPlacesCard from '../near-places-card';

type nearPlacesCardListProps = {
  offers: offersMocks[];
}

function NearPlacesCardList({offers}: nearPlacesCardListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: offersMocks) => (
        <NearPlacesCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </>
  );
}

export default NearPlacesCardList;
