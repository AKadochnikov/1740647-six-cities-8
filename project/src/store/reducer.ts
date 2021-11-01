import {DEFAULT_CITY, AuthorizationStatus} from '../const';
import {State} from '../types/state-types';
import {Actions, ActionType} from '../types/action-types';
import {getOffers} from '../utils';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  filteredOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
};

const reducer = (state: State = initialState, action: Actions) : State => {
  switch (action.type){

    case ActionType.ChangeCity:{
      const {city} = action.payload;
      return {...state, city: city};
    }

    case ActionType.ChangeOffers:
      return {...state, filteredOffers: state.offers.slice().filter((offerItem) => getOffers(state.city, offerItem))};

    case ActionType.MainReset:
      return {...state, filteredOffers: state.offers.slice().filter((offerItem) => getOffers(DEFAULT_CITY, offerItem))};

    case ActionType.LoadOffers: {
      const {offers} = action.payload;
      return {...state,
        offers: offers,
        filteredOffers: offers.slice().filter((offerItem) => getOffers(DEFAULT_CITY, offerItem)),
      };
    }

    case ActionType.RequireAuthorization: {
      const {authStatus} = action.payload;
      return {
        ...state,
        authorizationStatus: authStatus,
        isDataLoaded: true,
      };
    }

    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};

    default:
      return {...state, offers: state.offers};
  }
};

export {reducer};
