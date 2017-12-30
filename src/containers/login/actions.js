import * as TYPES from './types';

export const login = data => ({ 'type': TYPES.LOGIN_DONING, 'data': data })

export const loginOut = data => ({ 'type': TYPES.LOGGED_OUT, data: data })