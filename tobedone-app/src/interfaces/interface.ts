import { MouseEventHandler, ReactNode } from "react";

export interface BtnProps {
  click?: MouseEventHandler<HTMLButtonElement>;
  className: string;
  type: string;
  title?: string;
  children: ReactNode
}

export interface IconBtnProps {
  click?: MouseEventHandler<HTMLButtonElement>;
  className: string;
  type: string;
  children: ReactNode
}

export interface SubmitBtnProps {
  className?: string;
  type: string;
  title: string;
  children: ReactNode;
  disabled: boolean;
}

export interface NavProps {
    userName:string;
}

export interface ListItemProps {
  id: string;
  name:string;
  description: string;
  completed: boolean;
}

export interface CategoryItemProps {
  id?: string;
  name:string;
}

export interface CategoryProps {
  id?: string;
  name: string;
  listItems: CategoryItemProps[];
  createdAt?: number;
}

export interface UserProps {
  id: string;
  name: string;
  createdAt: number;
  categories: CategoryProps[];
}

/* export interface Data {
  userName: string;
  categories:Array<CategoryItem>;
  [Symbol.iterator]():any 
}


export interface CategoryItem {
    id?:string;
    status: "inprogress" | "done";
    type: string;
    createdAt:Date;
    name:string;
}

export interface CategoryListProps {
    categories: Array<CategoryItem>;
    username:string;
}

export interface CategoryListItemProps {
    name: string;
    type: string;
    status:"inprogress" | "done";
} */