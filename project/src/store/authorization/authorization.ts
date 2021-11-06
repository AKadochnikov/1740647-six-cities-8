import {Authorization} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  email: null,
};

const authorization = (state: Authorization = initialState, action: Actions) : Authorization => {
  switch (action.type){

    case ActionType.RequireAuthorization: {
      const {authStatus} = action.payload;
      return {
        ...state,
        authorizationStatus: authStatus,
      };
    }

    case ActionType.LoadEmail: {
      const {email} = action.payload;
      return {...state, email: email};
    }

    case ActionType.RequireLogout:
      return {...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
        email: null,
      };

    default:
      return state;
  }
};

export {authorization};
