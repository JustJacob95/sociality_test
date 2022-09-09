import React, {useEffect} from 'react';
import MainMenu from '../components/MainMenu';
import Content from './Content';
import '../styles/general.layout.scss';
import {useDispatch} from "react-redux";
import { fetchBrandsAction } from '../store/redux/brands/slice';
const GeneralLayout : React.FunctionComponent = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBrandsAction());
  }, []);
  return (<>
    <div className="app-wrapper">
      <MainMenu />
      <Content />
    </div>
  </>)
}

export default GeneralLayout;