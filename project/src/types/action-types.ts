import {changeOffers, changeCity, mainReset, loadOffers, requireAuthorization, requireLogout} from '../store/actions';
import {ThunkAction, ThunkDispatch} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {State} from './state-types';

export enum ActionType {
  ChangeCity = 'main/changeCity',
  ChangeOffers = 'main/changeOffers',
  MainReset = 'main/reset',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  ReturnType<typeof changeOffers>
  | ReturnType<typeof changeCity>
  | ReturnType<typeof mainReset>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
