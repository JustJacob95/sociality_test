import React, {useEffect} from 'react';
import {PostInterface, PostsType} from "../../../../store/redux/posts/types";
import {useDispatch, useSelector} from "react-redux";
import Post from './Post';
import {RootState} from "../../../../store/store";
import {fetchPostsAction} from "../../../../store/redux/posts/slice";


const Posts: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const posts:PostsType  = useSelector((state: RootState) => state.posts);
  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);
  return(
    <>
      {posts.loading === false && Object.keys(posts.items).length > 0 && Object.keys(posts.items).map(date => {
        return(<>
          <div className="date">
            {date}
          </div>
          <div className="row">
            {posts.items[date].map((post: PostInterface) => {
              return(Post({data: post}))
            })}
          </div>
        </>)
      })}
      {posts.loading === true && <>
        <div className="loader">
          <div></div>
        </div>
      </>}
    </>
  )
}

export default Posts;