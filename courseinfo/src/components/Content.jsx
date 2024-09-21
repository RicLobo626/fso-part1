/*** Part ***/

export const Part = ({ part }) => {
  return (
    <li>
      {part.name} - {part.exercises} exercises
    </li>
  );
};

/*** Content ***/

export const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part part={part} key={part.name} />
      ))}
    </ul>
  );
};
