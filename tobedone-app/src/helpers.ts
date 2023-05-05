//Local storage

import { Data } from "./interfaces/interface";

export const fetchData = (key: string): Data => {
    return JSON.parse(localStorage.getItem(key)!);
};