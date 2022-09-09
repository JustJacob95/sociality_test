import React, {MouseEventHandler} from 'react';
import { BrandType } from '../store/redux/brands/types';
import {Link} from "react-router-dom";
import '../styles/main.menu.brand.scss'

type BrandItemProps = {
  brand?: BrandType | undefined;
  index?: number,
  onClick?: MouseEventHandler<HTMLLIElement>,
  selected?: boolean
}
const BrandItem: React.FunctionComponent<BrandItemProps> = ({index, onClick, selected, brand}) => {
  const className = selected ? 'selected' : '';
  if (brand === undefined) {
    return(<>
      <li><span className="sceleton-loading-brand"></span></li>
    </>)
  }
  else{
    return(<>
      <Link to={'/brand/' + index} >
        <li onClick={onClick} className={className}><img src={require('../images/' + brand.image)} title={brand.name} alt={brand.name}/></li>
      </Link>
    </>)
  }

}

export default BrandItem;