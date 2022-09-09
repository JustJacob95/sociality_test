import React from 'react';

import ViewsIcon from '../../../../images/views.svg';
import CommentsIcon from '../../../../images/comments.svg';
import SharesIcon from '../../../../images/shares.svg';
import HeartIcon from '../../../../images/heart.svg';


const Statistics: React.FunctionComponent = () => {
  return(<>
    <div>
      <img src={HeartIcon} alt=""/>
      <span>3</span>
    </div>
    <div>
      <img src={SharesIcon} alt=""/>
      <span>3</span>
    </div>
    <div>
      <img src={CommentsIcon} alt=""/>
      <span>3</span>
    </div>
    <div>
      <img src={ViewsIcon} alt=""/>
      <span>1</span>
    </div>
  </>)
}

export default Statistics;