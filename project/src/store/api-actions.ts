import {ThunkActionResult} from '../types/action';
import {loadEmail, loadOffers, requireAuthorization, requireLogout} from './actions';
import {dropToken, saveToken} from '../services/token';
import {APIRoute, AUTH_FAIL_MESSAGE, AuthorizationStatus} from '../const';
import {Offers} from '../types/types';
import {AuthData} from '../types/auth-data';
import {Token} from '../types/api';
import {adaptOffersToClient} from '../utils';
import {toast} from 'react-toastify';

export const fetchHotelsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<Offers>(APIRoute.Hotels);
    const adaptedData = adaptOffersToClient(data);
    dispatch(loadOffers(adaptedData));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login)
        .then((response) => {
        //если удалить cookie, приложение не грузится и вылетает ошибка что email undefined, а значит вместе с cookie мы почистили наш localStorage и токена у нас теперь нет
          if (localStorage.getItem('user-token') !== null){
            dispatch(requireAuthorization(AuthorizationStatus.Auth));
            dispatch(loadEmail(response.data.email));
          } else {
            dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
            toast.info(AUTH_FAIL_MESSAGE);
          }
        });
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadEmail(email));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
