import { Post } from '../../interfaces/post.interface';

export enum PostsActionTypes {
  PostsLoaded = '[Alphin] Posts Loaded',
  PostLoaded = '[Alphin] Post Loaded',
}

export class PostsLoaded {
  readonly type = PostsActionTypes.PostsLoaded;

  constructor(public posts: Post[]) {}
}

export class PostLoaded {
  readonly type = PostsActionTypes.PostLoaded;

  constructor(public post: Post) {}
}

export type PostsActions = PostsLoaded | PostLoaded;
