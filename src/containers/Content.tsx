import React from 'react';
import {useSelector} from "react-redux";
import SummaryPageContainer from './pages/summary/index';
import EngagePageContainer from './pages/engage/index';
import ListenPageContainer from './pages/listen/index';
import ReportPageContainer from './pages/report/index';
import PublishIndex from './pages/publish/index';
import PublishCompose from './pages/publish/Compose';
import PublishFeed from './pages/publish/Feed';
import { RootState } from "../store/store";
import {
  Routes,
  Route,
  Navigate,
  useParams
} from "react-router-dom";
import {BrandMenuType} from "../store/redux/brands/types";
import '../styles/content.scss'

const Redirect: React.FunctionComponent = () => {
  const { brandId } = useParams();
  if (brandId === undefined) {
    return <Navigate to={"/brand/0/summary"} replace />
  }
  return <Navigate to={"/brand/"+brandId+"/summary"} replace />
}


const Content: React.FunctionComponent = () => {
  const brandMenu:BrandMenuType  = useSelector((state: RootState) => state.brandMenu);
  return(<div className="content">
    {brandMenu.loading === false && <Routes>
      <Route path="/brand/:brandId/summary" element={<SummaryPageContainer />} />
      <Route path="/brand/:brandId/publish" element={<PublishIndex />} />
      <Route path="/brand/:brandId/publish/compose" element={<PublishCompose />} />
      <Route path="/brand/:brandId/publish/feed" element={<PublishFeed />} />
      <Route path="/brand/:brandId/engage" element={<EngagePageContainer />} />
      <Route path="/brand/:brandId/listen" element={<ListenPageContainer />} />
      <Route path="/brand/:brandId/report" element={<ReportPageContainer />} />
      <Route path="/brand/:brandId/" element={<Redirect />} />
      <Route path="/" element={<Redirect />} />
      <Route path="*" element={<p>404 error</p>} />
    </Routes>}
    {brandMenu.loading === true && <>
      <div className="loader"><div></div></div>
    </>}
  </div>)
}

export default Content