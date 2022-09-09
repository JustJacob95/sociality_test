import axios from 'axios'
import serverUrl from '../services/serverUrl';
import './__mocks__/posts'

export function getPosts(){
  return axios.get(serverUrl + 'api/posts/list').then(response => response)
    .catch(e => e.response);
}