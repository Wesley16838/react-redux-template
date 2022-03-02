import { takeLatest } from 'redux-saga/effects';
import { registerSaga } from './authenticationSaga';
import { register } from '../actions/auth';

export default function* watchUserAuthentication() {
  yield takeLatest(register, registerSaga);
}