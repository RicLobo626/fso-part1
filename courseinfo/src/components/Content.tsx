import { CoursePart } from "src/types";

/*** Part ***/

type PartProps = {
  part: CoursePart;
};

export const Part = ({ part }: PartProps) => {
  return (
    <li>
      {part.name} - {part.exercises} exercises
    </li>
  );
};

/*** Content ***/

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
