import React from 'react';
import {postStatuses, PostStatusType} from "../../../../store/redux/posts/types";

const StatusesBar: React.FunctionComponent = () => {
  return(
    <>
      {Object.keys(postStatuses).map((statusId: string, index: number) => {
        const numberStatusId: number = parseInt(statusId);
        const status: PostStatusType = postStatuses[numberStatusId];
        return(<div key={'statuses-'+index} className={status.style}>
          {status.label}
        </div>)
      })}
    </>
  )
}

export default StatusesBar;