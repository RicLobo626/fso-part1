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
      <li>
        {part1} - {exercises1} exercises
      </li>
      <li>
        {part2} - {exercises2} exercises
      </li>
      <li>
        {part3} - {exercises3} exercises
      </li>
    </ul>
  );
};
