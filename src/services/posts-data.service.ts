import { AxiosResponse } from 'axios';
import { Post } from '../interfaces/post.interface';
import { ApiSuccessResponse } from '../models/api-success-response.model';
import apiService from './api.service';

const postsDataService = {
  getPosts(): Promise<ApiSuccessResponse<Post[]>> {
    return apiService
      .get('postings')
      .then(
        (response: AxiosResponse<ApiSuccessResponse<Post[]>>) => response.data,
      );
  },

  getPost(id: string): Promise<ApiSuccessResponse<Post>> {
    return apiService
      .get(`postings/${id}`)
      .then(
        (response: AxiosResponse<ApiSuccessResponse<Post>>) => response.data,
      );
  },
};

export default postsDataService;
