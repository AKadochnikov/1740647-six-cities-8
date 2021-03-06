import {ThunkActionResult} from '../types/action';
import {
  loadEmail,
  loadOffers,
  requireAuthorization,
  requireLogout,
  loadPropertyData,
  resetPropertyData,
  refreshComments,
  loadFavoriteOffers,
  updateFavoriteOffers,
  updateNearOffers,
  updateActiveOffer,
  updateOffers,
  updatePostCommentStatus
} from './actions';
import {dropToken, saveToken} from '../services/token';
import {APIRoute, AUTH_FAIL_MESSAGE, AuthorizationStatus, Category, DELETE_COUNT, POST_COMMENT_FAIL_MESSAGE, PostCommentStatus} from '../const';
import {Offers, OfferFromServer, PostComment, Comments, Offer} from '../types/types';
import {AuthData} from '../types/auth-data';
import {Token} from '../types/api';
import {adaptCommentsToClient, adaptOffersToClient, adaptOfferToClient} from '../utils';
import {toast} from 'react-toastify';

export const fetchHotelsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OfferFromServer[]>(APIRoute.Hotels);
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

export const postCommentAction = ({comment, rating, id}: PostComment): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.post(`${APIRoute.PostComment}${id}`, {comment, rating})
      .then((response) => {
        const comments: Comments = adaptCommentsToClient(response.data);
        dispatch(refreshComments(comments, PostCommentStatus.Success));
      })
      .catch(() => {
        dispatch(updatePostCommentStatus(PostCommentStatus.Ready));
        toast.info(POST_COMMENT_FAIL_MESSAGE);
      });
  };

export const postFavoriteAction = (id: number, favoriteStatus: number, offers: Offers | null, baseOffers: Offers, category: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const newOffer = await api.post(`/favorite/${id}/${favoriteStatus}`).then((response): Offer => adaptOfferToClient(response.data));
    let currentIndex = 0;
    currentIndex = baseOffers.findIndex((item) => item.id === id);
    let newOffers = baseOffers.slice();
    newOffers.splice(currentIndex, DELETE_COUNT, newOffer);
    dispatch(updateOffers(newOffers));

    if (offers === null) {
      dispatch(updateActiveOffer(newOffer));
      return;
    }
    switch (category) {
      case (Category.Favorites):{
        currentIndex = offers.findIndex((item) => item.id === id);
        newOffers = offers.slice();
        newOffers.splice(currentIndex, DELETE_COUNT);
        dispatch(updateFavoriteOffers(newOffers));
        break;
      }
      case Category.Nearby: {
        currentIndex = offers.findIndex((item) => item.id === id);
        newOffers = offers.slice();
        newOffers.splice(currentIndex, DELETE_COUNT, newOffer);
        dispatch(updateNearOffers(newOffers));
        break;
      }
      default: {
        break;
      }
    }
  };

export const fetchFavoritesDataAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const favoriteOffers = await api.get(APIRoute.Favorite).then((response): Offers => adaptOffersToClient(response.data));
    dispatch(loadFavoriteOffers(favoriteOffers));
  };
