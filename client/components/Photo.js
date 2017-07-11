import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default function Photo(props) {
  const post = props.post;
  const i = props.i;
  const comments = props.comments;
  const onClickLike = props.onClickLike;
  return (
    <figure className="grid-figure">
      <div className="grid-photo-wrap">
        <Link to={`/view/${post.code}`}>
          <img src={post.display_src} alt={post.caption} className="grid-photo"/>
        </Link>
        <CSSTransitionGroup transitionName="like"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <span key={post.likes} className="likes-heart">{post.likes}</span>
        </CSSTransitionGroup>
        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button className="likes" onClick={onClickLike.bind(null, i)}>
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                <span className="speech-bubble">
                  {comments[post.code] ? comments[post.code].length : 0}
                </span>
              </span>
            </Link>
          </div>
        </figcaption>
      </div>
    </figure>
  );
}
