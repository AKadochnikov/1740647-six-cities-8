import NearPlacesCard from '../near-place-card/near-places-card';
import {Offer, Offers} from '../../types/types';

type nearPlacesCardListProps = {
  offers: Offers;
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
