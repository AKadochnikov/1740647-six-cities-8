import FavoritesCard from '../favorites-card/favorites-card';
import {offersMocks} from '../../mocks/mock-types';

type favoriteListProp = {
  city: string;
  offers: offersMocks[];
}

function FavoritesList({offers, city}: favoriteListProp):JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.slice().filter((offer) => offer.city.name === city && offer.isFavorite).map((offer) => (
          <FavoritesCard
            offer={offer}
            key={offer.id}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesList;
