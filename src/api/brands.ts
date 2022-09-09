import axios from 'axios'
import serverUrl from '../services/serverUrl';
import './__mocks__/brands'

export function getBrandList(){
  return axios.get(serverUrl + 'api/brand/list').then(response => response)
    .catch(e => e.response);
}

export function getBrandMenu(brandIndex: number){
  return axios.get(serverUrl + 'api/brand/menu/' + brandIndex).then(response => response)
    .catch(e => e.response);
}