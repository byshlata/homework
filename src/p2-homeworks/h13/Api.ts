import {API_CONFIG} from "./config";

type RequestType = {
    errorText: string;
    info: string;
    yourBody: {success: boolean};
    yourQuery: {}
}

export const Api = {
    request: async (success: boolean) => {
        const res = await API_CONFIG.post<RequestType>(`auth/test`, {success});
        return res.data;
    },
}