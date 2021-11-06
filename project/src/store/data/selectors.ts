import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers, Offer, Comments} from '../../types/types';
import {createSelector} from 'reselect';

export const getOffers = (state: State): Offers => state[NameSpace.data].offers;
export const getCity = (state: State): string => state[NameSpace.data].city;
export const getIsDataLoading = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getActiveOffer = (state: State): Offer | null => state[NameSpace.data].activeOffer;
export const getComments = (state: State): Comments=> state[NameSpace.data].comments;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.data].nearbyOffers;
export const getIsPropertyDataLoaded = (state: State): boolean => state[NameSpace.data].isPropertyDataLoaded;

export const getFilteredOffers = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.slice().filter((offerItem) => offerItem.city.name === city),
);


