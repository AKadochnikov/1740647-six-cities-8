import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Offers, Offer, Comments} from '../../types/types';
import {createSelector} from 'reselect';
import {SORT_BY} from '../../const';

export const getOffers = (state: State): Offers => state[NameSpace.data].offers;
export const getCity = (state: State): string => state[NameSpace.data].city;
export const getIsDataLoading = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getActiveOffer = (state: State): Offer | null => state[NameSpace.data].activeOffer;
export const getComments = (state: State): Comments=> state[NameSpace.data].comments;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.data].nearbyOffers;
export const getIsPropertyDataLoaded = (state: State): boolean => state[NameSpace.data].isPropertyDataLoaded;
export const getActiveSortBy = (state: State): string => state[NameSpace.data].activeSortBy;
export const getIsFavoriteDataLoaded = (state: State): boolean => state[NameSpace.data].isFavoriteDataLoaded;
export const getFavoriteOffers = (state: State): Offers => state[NameSpace.data].favoriteOffers;

export const getSortedComments = createSelector(
  [getComments],
  (comments: Comments) => comments.slice().sort((commentA, commentB) => Date.parse(commentB.date) - Date.parse(commentA.date)),
);

export const getFilteredOffers = createSelector(
  [getOffers, getCity],
  (offers, city) => offers.slice().filter((offerItem) => offerItem.city.name === city),
);

export const getSortedOffers = createSelector(
  [getFilteredOffers,getActiveSortBy],
  (filteredOffers, activeSortBy): Offers => {
    let sortedOffers: Offers | [] = [];
    switch (activeSortBy) {
      case SORT_BY.Popular: {
        sortedOffers = filteredOffers;
        return sortedOffers;
      }
      case SORT_BY.LowToHigh: {
        sortedOffers = filteredOffers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
        return sortedOffers;
      }
      case SORT_BY.HighToLow: {
        sortedOffers = filteredOffers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
        return sortedOffers;
      }
      case SORT_BY.Top: {
        sortedOffers = filteredOffers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
        return sortedOffers;
      }
      default: {
        sortedOffers = filteredOffers;
        return sortedOffers;
      }
    }
  },
);


