import offers from '../mocks/offers';
import {DEFAULT_CITY} from '../const';
import {State} from '../types/state-types';
import {ActionType, Actions} from '../types/action-types';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers,
};

const reducer = (state: State = initialState, action: Actions) : State => {
  switch (action.type){
    case ActionType.ChangeCity:
      return {...state, city: state.city};
    case ActionType.LoadOffers:
      return {...state, offers: state.offers};
    default:
      return state;
  }
};

export {reducer};
