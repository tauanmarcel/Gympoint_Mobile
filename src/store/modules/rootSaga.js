import {all} from 'redux-saga/effects';

import persist from './persist/sagas';

export default function* rootSaga() {
  return yield all([persist]);
}
