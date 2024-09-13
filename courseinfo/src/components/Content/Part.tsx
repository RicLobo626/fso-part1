type PartProps = {
  name: string;
  exercises: number;
};

export const Part = ({ name, exercises }: PartProps) => {
  return (
    <li>
      {name} - {exercises} exercises
    </li>
  );
};
