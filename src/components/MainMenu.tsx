import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import BrandItem from './BrandItem';
import BrandMenu from './BrandMenu';
import { BrandListType } from '../store/redux/brands/types';
import { selectBrand } from '../store/redux/brands/slice';
import { RootState } from '../store/store';

import Logo from '../images/logo.svg';
import '../styles/main.menu.scss'

const MainMenu : React.FunctionComponent = () => {
  const brands: BrandListType = useSelector((state: RootState) => state.brands);
  const dispatch = useDispatch();
  const handleSelectBrand = (index: number) => {
    if (index !== brands.selectedBrand) {
      dispatch(selectBrand({
        selectedBrand: index
      }));
    }
  }
  return (<>
    <div className="main-menu">
      <div className="top-menu">
        <img src={Logo} alt="sociality"/>
      </div>
      <div className="brand-list">
        {brands.loading === true && <ul>
          {[1,2,3,4].map((item, i) => {
            return <BrandItem key={'brand-item-'+i} />
          })}
        </ul>}
        {brands.loading === false && brands.items.length > 0 && <>
          <ul>
            {brands.items.map((brand, i) => {
              return <BrandItem key={'brand-item-'+i} index={i} onClick={() => handleSelectBrand(i)} selected={(brands.selectedBrand === i)} brand={brand} />
            })}
          </ul>
        </>}
        <BrandMenu />
      </div>


    </div>
  </>)
}

export default MainMenu;