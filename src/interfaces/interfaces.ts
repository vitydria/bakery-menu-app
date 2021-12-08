import { Dispatch, SetStateAction } from "react";

export interface MenuProps {
  list: Description[];
  index: number;
}

export interface DescriptionProps {
  list: Description[];
  index: number;
  setState: Dispatch<SetStateAction<boolean>>;
}

export interface Description {
  name: string;
  desc: string;
  price: string;
  img: string;
}
