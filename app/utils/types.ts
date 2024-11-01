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
