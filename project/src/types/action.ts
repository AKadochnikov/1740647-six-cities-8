import {changeOffers, changeCity, mainReset, loadOffers, requireAuthorization, requireLogout, loadEmail} from '../store/actions';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeOffers = 'main/changeOffers',
  MainReset = 'main/reset',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadEmail = 'user/loadEmail',
}

export type Actions =
  ReturnType<typeof changeOffers>
  | ReturnType<typeof changeCity>
  | ReturnType<typeof mainReset>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadEmail>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
