import { CoursePart } from "src/types";

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
