type Props = {
  anecdote: string;
  votes: number;
};

export const AnecdoteDisplay = ({ anecdote, votes }: Props) => {
  return (
    <section>
      <h1>Anecdote of the day</h1>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p>
    </section>
  );
};
