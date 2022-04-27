import React, { useMemo, useReducer, useContext } from 'react';
import { Post } from '../../interfaces/post.interface';
import { PostLoaded, PostsLoaded } from './posts.actions';
import reducer from './posts.reducer';

interface PostsContext {
  postsState: {};
  onPostsLoaded: (posts: Post[]) => void;
  onPostLoaded: (post: Post) => void;
}

const PostsInitialContext: PostsContext = {
  postsState: {},
  onPostsLoaded: (posts: Post[]) => {},
  onPostLoaded: (post: Post) => {},
};

const PostsContext = React.createContext(PostsInitialContext);

function PostsProvider({ children }: { children: React.ReactNode }) {
  const [postsState, dispatch] = useReducer(reducer, {});

  const onPostsLoaded = (posts: Post[]): void => {
    try {
      dispatch(new PostsLoaded(posts));
    } catch (error) {
      throw new Error(error);
    }
  };

  const onPostLoaded = (post: Post): void => {
    try {
      dispatch(new PostLoaded(post));
    } catch (error) {
      throw new Error(error);
    }
  };
  const value = useMemo(() => {
    return {
      postsState,
      onPostLoaded,
      onPostsLoaded,
    };
  }, [postsState]);

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}

const usePosts = () => useContext(PostsContext);
export { PostsContext, usePosts };
export default PostsProvider;
