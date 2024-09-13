import { CoursePart } from "src/types";
import { Part } from "src/components";

type ContentProps = {
  parts: CoursePart[];
};

export const Content = ({ parts }: ContentProps) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part part={part} key={part.name} />
      ))}
    </ul>
  );
};
