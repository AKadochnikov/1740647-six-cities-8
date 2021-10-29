import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {MouseEvent} from 'react';

type CityListProps = {
  activeCity: string;
  currentCity: string;
  onCityChange: (evt: MouseEvent, currentCity: string) => void

}

function CityListTab (props: CityListProps):JSX.Element {
  const {activeCity, currentCity, onCityChange} = props;
  if (activeCity === currentCity) {
    return (
      <li className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active" >
          <span>{currentCity}</span>
        </a>
      </li>
    );
  }
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" onClick={(evt) => onCityChange(evt, activeCity)} to={AppRoute.Main}>
        <span>{currentCity}</span>
      </Link>
    </li>
  );
}

export default CityListTab;
