import NearPlacesCard from '../near-place-card/near-places-card';
import {offer} from '../../types/types';

type nearPlacesCardListProps = {
  offers: offer[];
}

function NearPlacesCardList({offers}: nearPlacesCardListProps): JSX.Element {
  return (
    <>
      {offers.map((offerItem: offer) => (
        <NearPlacesCard
          key={offerItem.id}
          offerItem={offerItem}
        />
      ))}
    </>
  );
}

export default NearPlacesCardList;
