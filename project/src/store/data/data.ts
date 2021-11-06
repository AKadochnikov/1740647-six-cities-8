import {Data} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {DEFAULT_CITY} from '../../const';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  isDataLoaded: false,
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

    default:
      return state;
  }
};

export {data};
