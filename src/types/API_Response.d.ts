export  type TStatusResponse = 'success' | 'failed' | 'error';

export interface API_Response<T = any> {
    status: TStatusResponse,
    message: string;
    results: T;

}