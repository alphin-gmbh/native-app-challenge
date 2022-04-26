import { Pagination } from '../interfaces/pagination.interface';
import { ClientViewDataAdapter } from '../interfaces/adapter.interface';

/**
 * Frontend model for API success responses
 */
export class ApiSuccessResponse<T> {
  readonly status?: string;
  readonly pagination?: Pagination;
  // readonly partialData?: PartialData;
  readonly result: T;

  constructor(object: ApiSuccessResponse<T>) {
    this.status = object.status;
    this.result = object.result;
    this.pagination = object.pagination;
    // this.partialData = object.partialData;
  }
}

/**
 * Adapter for API success responses
 */
export const apiSuccessResponseAdapter: ClientViewDataAdapter<
  ApiSuccessResponse<any>
> = {
  clientAdapt(object: any): ApiSuccessResponse<any> {
    return new ApiSuccessResponse(object);
  },
};
