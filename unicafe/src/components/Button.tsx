import { MouseEvent } from "react";

type Props = {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ text, onClick }: Props) => {
  return <button onClick={onClick}>{text}</button>;
};
