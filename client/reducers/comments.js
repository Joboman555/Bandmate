function modifyComments(comments = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      const newComment = {
        user: action.author,
        text: action.comment,
      };
      return [
        ...comments,
        newComment,
      ]
    case 'REMOVE_COMMENT':
      console.log('removing comment');
      return [
        ...comments.slice(0, action.index),
        ...comments.slice(action.index+1),
      ];
    default:
      return comments;
  }
}

export default function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: modifyComments(state[action.postId], action)
    }
  }
  return state;
}
