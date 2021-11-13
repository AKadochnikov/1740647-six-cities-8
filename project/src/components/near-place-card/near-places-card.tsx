import {Link, useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {Offer, Offers} from '../../types/types';
import Card from '../card/card';

type nearPlacesCardProps = {
  offerItem: Offer;
  isFavorites: boolean;
  offers: Offers
}

function NearPlacesCard (props: nearPlacesCardProps): JSX.Element {
  const {offerItem, isFavorites, offers} = props;
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const {id, previewImage} = offerItem;
  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <Card offer={offerItem} isFavorites={isFavorites} offers={offers}/>
    </article>
  );
}

export default NearPlacesCard;
