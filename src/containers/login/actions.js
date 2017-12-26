import * as TYPES from './types';

export const login = data => ({ 'type': TYPES.LOGGED_IN, 'data': data })

export const loginDone = data => ({ 'type': TYPES.LOGGED_DOING, data: data })