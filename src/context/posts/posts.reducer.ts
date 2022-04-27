import { PostsActions, PostsActionTypes } from './posts.actions';

export const postsInitialState = {
  posts: undefined,
  post: undefined,
};

const postsReducer = (state = postsInitialState, action: PostsActions) => {
  switch (action.type) {
    case PostsActionTypes.PostsLoaded: {
      return { ...state, posts: action.posts };
    }

    case PostsActionTypes.PostLoaded: {
      return { ...state, post: action.post };
    }

    default:
      return state;
  }
};

export default postsReducer;
