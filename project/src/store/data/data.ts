import {Data} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {DEFAULT_CITY, SORT_BY} from '../../const';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  favoriteOffers: [],
  isFavoriteDataLoaded: false,
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

    case ActionType.LoadFavoriteOffers: {
      const {favoriteOffers} = action.payload;
      return {...state,
        favoriteOffers: favoriteOffers,
        isPropertyDataLoaded: true,
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

    case ActionType.ChangeActiveSortBy: {
      const {sortItem} = action.payload;
      return {...state, activeSortBy: sortItem};
    }

    case ActionType.RefreshComments: {
      const {comments} = action.payload;
      return {...state, comments: comments};
    }

    default:
      return state;
  }
};

export {data};
