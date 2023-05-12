import { MouseEventHandler, ReactNode } from "react";

export interface BtnProps {
  click?: MouseEventHandler<HTMLButtonElement>;
  className: string;
  type: string;
  title: string;
  children: ReactNode
}

export interface SubmitBtnProps {
  className: string;
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
    name:string;
}