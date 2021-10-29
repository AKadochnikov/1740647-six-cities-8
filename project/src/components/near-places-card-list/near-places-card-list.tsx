import NearPlacesCard from '../near-place-card/near-places-card';
import {offerMock} from '../../types/types';

type nearPlacesCardListProps = {
  offers: offerMock[];
}

function NearPlacesCardList({offers}: nearPlacesCardListProps): JSX.Element {
  return (
    <>
      {offers.map((offer: offerMock) => (
        <NearPlacesCard
          key={offer.id}
          offer={offer}
        />
      ))}
    </>
  );
}

export default NearPlacesCardList;
