import FavoritesCard from '../favorites-card/favorites-card';
import {offersMocks} from '../../mocks/mock-types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type favoriteListProp = {
  city: string;
  offers: offersMocks[];
}

function FavoritesList({offers, city}: favoriteListProp):JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={AppRoute.Main}>
            <span>{city}</span>
          </Link>
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
