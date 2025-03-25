export interface IMethodsHttp {
    get(path: string): Promise<Response>
    post(path: string, data: any): Promise<Response>
    put(path: string, data: any): Promise<Response>
    delete(path: string): Promise<Response>
}
export interface IHttp {
    constructor(uri:string) : IMethodsHttp
}