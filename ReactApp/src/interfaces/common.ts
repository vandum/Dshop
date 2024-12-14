export interface ApiResponse<T> {
    message: string;
    status: 0 | 1 | 2;
    data: T;
  }