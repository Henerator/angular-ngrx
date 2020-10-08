export interface ApiError<T = any> {
    message: string;
    error: T | null;
}
