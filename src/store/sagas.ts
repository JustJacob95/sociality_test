import { all, spawn } from 'redux-saga/effects';
import brandsSaga from './redux/brands/sagas'
import postsSaga from './redux/posts/sagas'


export default function* rootSaga() {
  yield all([
    spawn(brandsSaga),
    spawn(postsSaga),
  ])
}