import {Data} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {DEFAULT_CITY} from '../../const';
import {SORT_BY} from '../../const';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
  activeOffer: null,
  comments: [],
  nearbyOffers: [],
  isPropertyDataLoaded: false,
  activeSortBy: SORT_BY.Popular,
};

const data = (state: Data = initialState, action: Actions) : Data => {
  switch (action.type){

    case ActionType.LoadOffers: {
      const {offers} = action.payload;
      return {...state,
        offers: offers,
        isDataLoaded: true,
      };
    }

    case ActionType.ChangeCity:{
      const {city} = action.payload;
      return {...state, city: city};
    }

    case ActionType.LoadPropertyData:{
      const {offer, comments, nearbyOffers} = action.payload;
      return {...state,
        activeOffer: offer,
        comments: comments,
        nearbyOffers: nearbyOffers,
        isPropertyDataLoaded: true,
      };
    }

    case ActionType.ResetPropertyData: {
      return {...state,
        activeOffer: null,
        isPropertyDataLoaded: false,
      };
    }

    default:
      return state;
  }
};

export {data};
