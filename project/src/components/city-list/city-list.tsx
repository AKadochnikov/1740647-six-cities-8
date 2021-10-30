import {CITIES} from '../../const';
import {Dispatch} from '@reduxjs/toolkit';
import {Actions} from '../../types/action-types';
import {MouseEvent} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import CityListTab from '../city-list-item/city-list-tab';
import {changeCity, changeOffers} from '../../store/actions';

type CityListProps = {
  city: string;
}

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  handleChangeCity (evt: MouseEvent, city: string) {
    evt.preventDefault();
    const newCity = evt.currentTarget.textContent;
    if (newCity && newCity !== city) {
      dispatch(changeCity(newCity));
      dispatch(changeOffers());
    }
  },
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & CityListProps;

function CityList (props: ConnectedComponentProps): JSX.Element {
  const {city, handleChangeCity} = props;
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((currentCity) => <CityListTab key={currentCity} activeCity={city} currentCity={currentCity} onCityChange={handleChangeCity}/>)}
      </ul>
    </section>);
}

export default connector(CityList);
