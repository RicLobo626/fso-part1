import { Header, Total, Content } from "src/components";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  const total = exercises1 + exercises2 + exercises3;

  return (
    <>
      <Header course={course} />

      <main>
        <Content
          part1={part1}
          part2={part2}
          part3={part3}
          exercises1={exercises1}
          exercises2={exercises2}
          exercises3={exercises3}
        />
        <Total total={total} />
      </main>
    </>
  );
};

export default App;
