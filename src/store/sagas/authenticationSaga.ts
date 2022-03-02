import { AxiosResponse } from 'axios';
import { put, call } from 'redux-saga/effects';
import { User } from '../../interfaces/user.interface';
import AuthService from '../../service/auth.service';
import { register } from '../actions/auth';

import * as types from "../actionTypes";

export function* registerSaga({ payload }: ReturnType<typeof register>){
  try {
    const response: AxiosResponse = yield call(AuthService.register, payload);
    yield [
      put({ type: types.REGISTER_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}