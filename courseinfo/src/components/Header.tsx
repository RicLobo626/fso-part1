type HeaderProps = {
  course: string;
};

export const Header = ({ course }: HeaderProps) => {
  return (
    <header>
      <h1>{course}</h1>
    </header>
  );
};
