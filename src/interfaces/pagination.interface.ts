/**
 * Interface for pagination object returned in the response for a list
 */
export interface Pagination {
  readonly current: number;
  readonly first: number;
  readonly hasNext: boolean;
  readonly hasPrev: boolean;
  readonly last: number;
  readonly limit: number;
  readonly totalCount: number;
}

/**
 * Paginated result for a generic model
 */
export interface PaginatedResult<T> {
  data: T[];
  pagination?: Pagination;
}
