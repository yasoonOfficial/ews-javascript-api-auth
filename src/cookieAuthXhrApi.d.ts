import * as Promise from "bluebird";
import { IXHRApi, IXHROptions, IXHRProgress } from "./ews.partial";
export declare class cookieAuthXhrApi implements IXHRApi {
    private stream;
    private username;
    private password;
    private cookies;
    readonly apiName: string;
    constructor(username: string, password: string);
    xhr(xhroptions: IXHROptions, progressDelegate?: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest>;
    xhrStream(xhroptions: IXHROptions, progressDelegate: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest>;
    disconnect(): void;
    private cookiesPreCall;
    private static parseString;
}
