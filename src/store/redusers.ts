import { combineReducers } from 'redux';
import brands, { brandMenu } from './redux/brands/slice'
import posts from './redux/posts/slice'
const reducers = combineReducers({
  brands,
  posts,
  brandMenu
});

export default reducers