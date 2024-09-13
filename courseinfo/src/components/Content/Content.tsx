import { Part } from "src/components";

type ContentProps = {
  part1: string;
  part2: string;
  part3: string;
  exercises1: number;
  exercises2: number;
  exercises3: number;
};

export const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3,
}: ContentProps) => {
  return (
    <ul>
      <Part name={part1} exercises={exercises1} />
      <Part name={part2} exercises={exercises2} />
      <Part name={part3} exercises={exercises3} />
    </ul>
  );
};
