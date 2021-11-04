import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers} from '../../types/types';
import {createSelector} from 'reselect';

export const getOffers = (state: State): Offers => state[NameSpace.data].offers;
export const getCity = (state: State): string => state[NameSpace.data].city;
export const getIsDataLoading = (state: State): boolean => state[NameSpace.data].isDataLoaded;

export const getFilteredOffers = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.slice().filter((offerItem) => offerItem.city.name === city),
);
