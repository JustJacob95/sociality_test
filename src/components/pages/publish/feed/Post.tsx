import React from 'react';
import Action from './Actions';
import Statistics from './Statistics';
import Thumbnail from './Thumbnail';
import {PostInterface, postStatuses} from "../../../../store/redux/posts/types";

type PostPropsType = {
  data: PostInterface
}

const Post: React.FunctionComponent<PostPropsType> = ({data}: PostPropsType) => {
  const classNameForStatus = "status " + postStatuses[data.status].style;
  return(<>
    <div className="post">
      <div className={classNameForStatus}>
        <div className="type">
          <a target="_blank" href={data.account.link} rel="noreferrer">
            {/*TODO not good way to load image*/}
            <img src={require('../../../../images/' + data.account.channel + '.svg')} alt={data.account.name} title={data.account.name}/>
          </a>
        </div>
      </div>
      <div className="postContent">
        <div className="top">
          <div className="date">{data.published_at + ""}</div>
          <div className="actions">
            <Action status={data.status} />
          </div>
        </div>
        <div className="text">
          {data.entry.message}
        </div>
        <div className="thumbnail">
          <Thumbnail images={data.entry.image} />
        </div>
        <div className="statistics">
          <Statistics />
        </div>
      </div>
    </div>
  </>)
}

export default Post