import { put, call, take, fork } from 'redux-saga/effects';
import { LOGGED_IN, LOGGED_DOING } from './types';
import { post } from '../../service/request';
import apiUrl from '../../constants/api';

export function* loginToServer(params) {
  try {
    // const result = yield call(post, apiUrl.login, params);
    const result = { result: '1000' }
    console.log("返回结果" + JSON.stringify(result));
    yield put({ type: LOGGED_DOING, data: result });

  } catch (error) {
    console.log('网络故障' + error);
  }
}

export function* watchLoginRequests() {
  while (true) {
    const action = yield take(LOGGED_IN);
    yield fork(loginToServer, action.data);
  }
}



