import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.authorization].authorizationStatus;
export const getEmail = (state: State): string | null => state[NameSpace.authorization].email;
