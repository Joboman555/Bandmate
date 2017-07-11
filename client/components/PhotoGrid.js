import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo'

export default function PhotoGrid(props) {
  return (
    <div className="photo-grid">
      {props.posts.map((post, index) =>
        <Photo
          onClickLike={props.increment}
          key={index}
          post={post}
          comments={props.comments}
          i={index}/>
      )}
    </div>
  );
}
