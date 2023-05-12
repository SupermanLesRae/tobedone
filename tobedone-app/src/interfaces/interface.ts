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
  children: ReactNode
}

export interface Data {
  userName: string;
}

export interface NavProps {
    userName:string;
}

export interface CategoryItem {
    status: "inprogress" | "done";
    type: string;
    name:string;
}

export interface CategoryListProps {
    list: CategoryItem[];
}

export interface CategoryListItemProps {
    name: string;
    type: string;
    status:"inprogress" | "done";
}