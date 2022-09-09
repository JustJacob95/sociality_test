import React from 'react';
import StatusesBar from "../../../components/pages/publish/feed/StatusesBar";
import Posts from "../../../components/pages/publish/feed/Posts";
import Avatar from '../../../images/avatar.svg';


const PublishFeed: React.FunctionComponent = () => {
  return(<>
    <div className="statuses-info">
      <StatusesBar />
    </div>
    <div className="avatar">
      <img src={Avatar} alt=""/>
    </div>
    <div className="posts-wrapper">
      <Posts />
    </div>
  </>)
}


export default PublishFeed
