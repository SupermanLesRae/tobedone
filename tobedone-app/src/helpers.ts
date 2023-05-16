//Local storage

export const waaait = () => new Promise(res=>setTimeout(res, Math.random()*2000));

//interface imports
import { ListItemProps, UserProps } from "./interfaces/interface";

export const fetchData = (key: any): UserProps | null => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

//create user
export const createUser = ({username} : {username:string}) => {

    const user:UserProps = {

        id: crypto.randomUUID(),
        name:username,
        createdAt:Date.now(),
        categories: [],
    }

    return localStorage.setItem("user", JSON.stringify(user));
}

//create category
export const createCategory = ({name,listItems, completed}: {name: FormDataEntryValue, listItems: ListItemProps[], completed: boolean}) => {
    
    const newCategory = {
        id:crypto.randomUUID(),
        name: name,
        listItems:listItems,
        completed:completed,
        createdAt: Date.now(),
    }


    const user = fetchData("user") as UserProps || [];
   // Update the categories array
    user.categories = [...(user.categories || []), newCategory];

    // Set the updated item back in localStorage
    localStorage.setItem('user', JSON.stringify(user));

    //return localStorage.setItem("user", JSON.stringify([...exsitingCategory, newCategory]));
};


// delete item
export const deleteItem = ({ key }: { key:string }) => {
    return localStorage.removeItem(key);
}