import { all, takeLatest, put, spawn, call } from 'redux-saga/effects';
import api from '../../../api'
import { PostType} from "./types";
import { fetchPostsAction, setPosts } from './slice';
import {AxiosResponse} from "axios";


//Workers

export function*getPostsWorker () {
  try {
    const response: AxiosResponse = yield call(api.posts.getPosts);
    if (response.status === 200) {
      const posts: Array<PostType> = response.data;
      yield put({
        type: setPosts.type,
        payload: {items: posts}
      });
    }
    else{
      console.error(response.data.error.message);
      //TODO Fail case
    }
  }
  catch (e ) {
    //TODO Fail case
  }
}



//Watchers
export function* getPostsWatcher() {
  yield takeLatest(fetchPostsAction.type,getPostsWorker)
}


export default function* postsSaga() {
  yield all([
    spawn(getPostsWatcher),
  ])
}