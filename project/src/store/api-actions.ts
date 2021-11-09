import {ThunkActionResult} from '../types/action';
import {
  loadEmail,
  loadOffers,
  requireAuthorization,
  requireLogout,
  loadPropertyData, resetPropertyData
} from './actions';
import {dropToken, saveToken} from '../services/token';
import {APIRoute, AUTH_FAIL_MESSAGE, AuthorizationStatus} from '../const';
import {Offers, OfferInServer} from '../types/types';
import {AuthData} from '../types/auth-data';
import {Token} from '../types/api';
import {adaptCommentsToClient, adaptOffersToClient, adaptOfferToClient} from '../utils';
import {toast} from 'react-toastify';

export const fetchHotelsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferInServer[]>(APIRoute.Hotels);
    const adaptedData: Offers = adaptOffersToClient(data);
    dispatch(loadOffers(adaptedData));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login)
        .then((response) => {
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

export const fetchPropertyDataAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    dispatch(resetPropertyData());
    const activeOffer = await api.get(`/hotels/${id}`).then((response) => adaptOfferToClient(response.data));
    const comments = await api.get(`/comments/${id}`).then((response) => adaptCommentsToClient(response.data));
    const nearbyOffers = await api.get(`/hotels/${id}/nearby`).then((response) => adaptOffersToClient(response.data));
    dispatch(loadPropertyData(activeOffer, comments, nearbyOffers));
  };
