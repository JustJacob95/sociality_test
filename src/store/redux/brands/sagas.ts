import { all, takeLatest, put, spawn, call, select } from 'redux-saga/effects';
import api from '../../../api'
import { BrandType, BrandMenuItem} from "./types";
import { fetchBrandsAction, setBrands, fetchBrandMenu, setBrandMenu, selectBrand } from './slice';
import {AxiosResponse} from "axios";
import { RootState } from '../../store'


//Workers

export function*selectBrandWorker() {
  yield put(
    {
      type: fetchBrandMenu.type,
    }
  )
}

export function*getBrandMenuWorker () {
  try {
    const state: RootState = yield select();
    const response: AxiosResponse = yield call(api.brands.getBrandMenu, state.brands.selectedBrand);
    if (response.status === 200) {
      const menu: Array<BrandMenuItem> = response.data;
      yield put({
        type: setBrandMenu.type,
        payload: {items: menu}
      });

      // yield put(
      //   type:
      // )
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


export function*getBrandsWorker () {
  try {
    const response: AxiosResponse = yield call(api.brands.getBrandList);
    if (response.status === 200) {
      const brands: Array<BrandType> = response.data;
      yield put({
        type: setBrands.type,
        payload: {items: brands}
      });

      yield put(
        {
          type: fetchBrandMenu.type,
        }
      )
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
export function* getBrandsWatcher() {
  yield takeLatest(fetchBrandsAction.type,getBrandsWorker)
}

export function* getBrandMenuWatcher() {
  yield takeLatest(fetchBrandMenu.type,getBrandMenuWorker)
}

export function* selectBrandWatcher() {
  yield takeLatest(selectBrand.type,selectBrandWorker)
}

export default function* brandsSaga() {
  yield all([
    spawn(getBrandsWatcher),
    spawn(selectBrandWatcher),
    spawn(getBrandMenuWatcher),
  ])
}