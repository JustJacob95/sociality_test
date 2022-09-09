import { createSlice } from '@reduxjs/toolkit'
import { PostsType } from './types'


const initialPostsState: PostsType = {
  loading: true,
  errors: [],
  items: {}
}

export const posts = createSlice({
  name: 'posts',
  initialState: initialPostsState,
  reducers: {
    setPosts: (state, action) => ({...action.payload, selectedBrand: 0, errors: [], loading: false}),
    fetchPostsAction: (state) => ({...state, loading: true}),
  }
});

export const { setPosts, fetchPostsAction } = posts.actions;

export default posts.reducer;