import { select, put, call, take, fork } from 'redux-saga/effects';
import { LOGGED_IN, LOGGED_DOING, LOGIN_DONING } from './types';
import { getAuth, getUsers } from './selectors';
import { post } from '../../service/request';
import apiUrl from '../../constants/api';

export function* loginToServer() {
  try {
    const auth = yield select(getAuth);
    console.log("登录信息：" + JSON.stringify(auth));
    // const result = yield call(post, apiUrl.login, params);
    const result = { result: '1000' }
    if (auth.accountName == "222") {
      console.log("返回结果" + JSON.stringify(result));
      yield put({ type: LOGGED_DOING, data: result });
    }

  } catch (error) {
    console.log('网络故障' + error);
  }
}

export function* watchLoginRequests() {
  while (true) {
    yield take(LOGIN_DONING);
    // yield fork(loginToServer);
    const auth = yield select(getAuth);
    console.log("登录信息：" + JSON.stringify(auth));
    // const result = yield call(post, apiUrl.login, params);
    const result = { result: '1000' }
    if (auth.accountName == "222") {
      console.log("返回结果" + JSON.stringify(result));
      yield put({ type: LOGGED_DOING, data: result });
    }
  }
}



