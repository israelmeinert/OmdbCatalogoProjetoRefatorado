export interface IHttp {
    get<T>(path: string): Promise<T>
}
