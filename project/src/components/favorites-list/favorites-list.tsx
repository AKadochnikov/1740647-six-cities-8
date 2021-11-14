import FavoritesCard from '../favorites-card/favorites-card';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Offers} from '../../types/types';
import {Category} from '../../const';

type favoriteListProp = {
  city: string;
  offers: Offers;
  isFavorites: boolean;
}

function FavoritesList(props: favoriteListProp):JSX.Element {
  const {city, offers, isFavorites} = props;
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
        {offers.slice().filter((offerItem) => offerItem.city.name === city && offerItem.isFavorite).map((offerItem) => (
          <FavoritesCard
            offerItem={offerItem}
            key={offerItem.id}
            isFavorites={isFavorites}
            offers={offers}
            category={Category.Favorites}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesList;
