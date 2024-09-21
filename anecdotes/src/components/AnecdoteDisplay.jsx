export const AnecdoteDisplay = ({ anecdote, votes }) => {
  return (
    <section>
      <h1>Anecdote of the day</h1>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p>
    </section>
  );
};
