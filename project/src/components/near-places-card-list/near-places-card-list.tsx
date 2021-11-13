import NearPlacesCard from '../near-place-card/near-places-card';
import {Offer, Offers} from '../../types/types';

type nearPlacesCardListProps = {
  offers: Offers;
  isFavorites: boolean;
}

function NearPlacesCardList(props: nearPlacesCardListProps): JSX.Element {
  const {offers, isFavorites} = props;
  return (
    <>
      {offers.map((offerItem: Offer) => (
        <NearPlacesCard
          key={offerItem.id}
          offerItem={offerItem}
          isFavorites={isFavorites}
          offers={offers}
        />
      ))}
    </>
  );
}

export default NearPlacesCardList;
