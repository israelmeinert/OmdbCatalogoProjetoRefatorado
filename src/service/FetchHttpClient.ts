import { IHttp } from "../shared/Interface";

export default class FetchHttpClient implements IHttp {
    async get<T>(path: string): Promise<T> {
        const response = await fetch(path);
        return await response.json() as T;
    }
}
