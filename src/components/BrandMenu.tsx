import React, {useState} from 'react';
import {useSelector} from "react-redux";
import { BrandMenuType, BrandListType } from '../store/redux/brands/types';
import {RootState} from "../store/store";
import {
  Link, useLocation
} from "react-router-dom";
import IconNotification from '../images/bell.svg';
import SummaryIcon from '../images/SummaryIcon';
import PublishIcon from '../images/PublishIcon';
import ChatIcon from '../images/ChatIcon';
import WavesIcon from '../images/WavesIcon';
import ReportIcon from '../images/ReportIcon';
import '../styles/main.menu.brand.menu.scss'


const icons = {
  'summary.svg': SummaryIcon,
  'publish.svg': PublishIcon,
  'chat.svg': ChatIcon,
  'waves.svg': WavesIcon,
  'report.svg': ReportIcon,
}
const BrandMenu : React.FunctionComponent = () => {
  const [selectedItem, setSelectedItem] = useState<number>();
  const brandMenu:BrandMenuType  = useSelector((state: RootState) => state.brandMenu);
  const brands:BrandListType  = useSelector((state: RootState) => state.brands);
  const location = useLocation();
  return(<>
    <div className="brand-menu">
      <ul>
        {brandMenu.loading === true && <>
          {[1,2,3,4,5].map((item, i) => {
            return(<li className="sceleton-loading-brand-menu-item" key={'brand-item-'+i}>
              <div></div>
            </li>)
          })}
        </>}

        {brandMenu.loading === false && brandMenu.items.length > 0 && <>
          <li>
            <div>
              <div>
                <a href="#">
                  <img src={IconNotification} />
                  <span>Notifications</span>
                </a>

              </div>
              <span className="notifications">
                29
              </span>
            </div>
          </li>
          {brandMenu.items.map((item, i) => {
            const active = (item.url !== undefined && location.pathname.indexOf(item.url.split('/')[item.url.split('/').length - 1]) >= 0);

            const iconName = item.icon;
            return(<li className={active ? ' opened' : ''} key={'brand-item-'+i}>
              <div>
                <div>
                  <Link to={'/brand/' + brands.selectedBrand + item.url}>
                    <>
                      {iconName && icons[iconName as keyof typeof icons] && icons[iconName as keyof typeof icons]({active: active})}
                      <span>{item.label}</span>
                    </>
                    {/*{item.icon !== undefined && icons[item.icon] !== undefined && icons[item.icon](false)}*/}
                    {/*<img src={require('../images/' + item.icon)} alt=""/>*/}

                  </Link>

                </div>
                <span>
                  {item.children !== undefined && item.children.length > 0 && <div onClick={() => setSelectedItem(selectedItem === i ? undefined : i)} className={'toggle-opened'}>
                    {active ? ' -' : '+'}
                  </div>}
                </span>
              </div>
              {item.children !== undefined && item.children.length > 0 && <>
                <ul className="children-brand-menu">
                  {item.children.map((item, j) => {
                    return(<li key={'children-brand-menu-' +j} className={(item.url !== undefined && location.pathname.indexOf(item.url.split('/')[item.url.split('/').length - 1]) >= 0) ? ' active' : ''}>
                      <Link to={'/brand/' + brands.selectedBrand + item.url}>
                        {item.label}
                      </Link>
                    </li>)
                  })}
                </ul>
              </>}
            </li>)
          })}
        </>}
      </ul>
    </div>
  </>)
}

export default BrandMenu;