import {changeOffers, changeCity, loadOffers, requireAuthorization, requireLogout, loadEmail,
  loadPropertyData, resetPropertyData, changeActiveSortBy, refreshComments, loadFavoriteOffers, resetIsFavoriteDataLoaded} from '../store/actions';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeOffers = 'main/changeOffers',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadEmail = 'user/loadEmail',
  LoadPropertyData = 'property/loadPropertyData',
  ResetPropertyData = 'property/resetPropertyData',
  ChangeActiveSortBy = 'sort/changeActiveSortBy',
  RefreshComments = 'post/refreshComments',
  LoadFavoriteOffers = 'data/loadFavoriteOffers',
  ResetIsFavoritesDataLoaded = 'data/resetIsFavoritesDataLoaded'
}

export type Actions =
  ReturnType<typeof changeOffers>
  | ReturnType<typeof changeCity>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadEmail>
  | ReturnType<typeof loadPropertyData>
  | ReturnType<typeof resetPropertyData>
  | ReturnType<typeof changeActiveSortBy>
  | ReturnType<typeof refreshComments>
  | ReturnType<typeof loadFavoriteOffers>
  | ReturnType<typeof resetIsFavoriteDataLoaded>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
