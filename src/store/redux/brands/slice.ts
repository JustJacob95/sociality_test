import { createSlice } from '@reduxjs/toolkit'
import { BrandListType, BrandMenuType } from './types';


const initialBrandsState: BrandListType = {
  loading: true,
  errors: [],
  selectedBrand: 0,
  items: []
}

export const brands = createSlice({
  name: 'brands',
  initialState: initialBrandsState,
  reducers: {
    setBrands: (state, action) => ({...action.payload, selectedBrand: 0, errors: [], loading: false}),
    selectBrand: (state, action) => ({...state, ...action.payload}),
    fetchBrandsAction: (state) => ({...state, loading: true}),
  }
});

const initialBrandMenuState: BrandMenuType = {
  loading: true,
  errors: [],
  items: []
}

const brandMenuSlice = createSlice({
  name: 'brandMenu',
  initialState: initialBrandMenuState,
  reducers: {
    fetchBrandMenu: (state) => ({...state, loading: true}),
    setBrandMenu: (state, action) => ({...action.payload, errors: [], loading: false}),
  }
});

export const brandMenu = brandMenuSlice.reducer;

export const { fetchBrandsAction, setBrands, selectBrand } = brands.actions;

export const { setBrandMenu, fetchBrandMenu } = brandMenuSlice.actions;


export default brands.reducer

