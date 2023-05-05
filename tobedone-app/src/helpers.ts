//Local storage

//use any if data is not defined and change later
interface Data {
  name: string;
}

export const fetchData = (key: string): Data => {
    return JSON.parse(localStorage.getItem(key)!);
};