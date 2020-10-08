import { all } from 'redux-saga/effects';

import data from './test/sagas';

export default function* rootSaga() {
  return yield all([data]);
}
