import NearPlacesCard from '../near-place-card/near-places-card';
import {Offer} from '../../types/types';

type nearPlacesCardListProps = {
  offers: Offer[];
}

function NearPlacesCardList({offers}: nearPlacesCardListProps): JSX.Element {
  return (
    <>
      {offers.map((offerItem: Offer) => (
        <NearPlacesCard
          key={offerItem.id}
          offerItem={offerItem}
        />
      ))}
    </>
  );
}

export default NearPlacesCardList;
