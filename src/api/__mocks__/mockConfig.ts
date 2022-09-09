import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';
const mock = new mockAdapter(axios, {delayResponse: 500});
export default mock;