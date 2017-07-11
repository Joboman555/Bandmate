import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';
import Comments from './Comments';

export default function PhotoGrid(props) {
  const postId = props.params.postId
  const postIndex = props.posts.findIndex((post) => post.code === postId);
  const postComments = props.comments[postId] || [];
  const post = props.posts[postIndex];
  return (
    <div className="single-photo">
      <Photo i={postIndex} post={post} onClickLike={props.increment} comments={props.comments} />
      <Comments {...props} postComments={postComments}/>
    </div>
  );
}
