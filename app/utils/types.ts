import { ReactNode } from "react";

export type LoginMetadata = {
  title: string;
  subTitle: string;
  loginType: string;
};

export type Notice = {
  title: string;
  description: string;
  time: string;
  icon: ReactNode;
  bgColor: string;
  text: string;
};
export type TableProps<T> = {
  titles: string[];
  data: T[];
  onClick?: (item: T) => void;
};
export type StudentPerformance = {
  index: number;
  name: string;
  form: string;
  total: number;
  year: string;
  term: string;
  grade: string;
  exam: string;
};

export type StudentData = {
  firstName: string;
  lastName: string;
  stream: string;
  admno: string;
  parentName: string;
  parentContact: string;
  prevGrade: string;
  yearAdm: string;
};
