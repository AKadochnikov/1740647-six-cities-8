import PlaceCard from '../place-card/place-card';
import {Offers, Offer} from '../../types/types';
import {memo} from 'react';

type CardListProps = {
  offers: Offers
  onMouseEnter: (id: number) => void;
  onMouseLeave: () => void;
  isFavorites: boolean;
}

function CardList (props: CardListProps): JSX.Element {
  const {offers, onMouseEnter, onMouseLeave, isFavorites} = props;
  return (
    <>
      {offers.map((offerItem: Offer) => (
        <PlaceCard
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          key={offerItem.id}
          offerItem={offerItem}
          isFavorites={isFavorites}
          offers={offers}
        />
      ))}
    </>
  );
}

export default memo(CardList);
