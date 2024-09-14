import { FeedbackCounts } from "src/types";

/*** StatisticLine ***/

type StatisticLineProps = {
  text: string;
  value: number;
};

export const StatisticLine = ({ text, value }: StatisticLineProps) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

/*** StatisticsTable ***/

type StatisticsTableProps = {
  feedbackCounts: FeedbackCounts;
  total: number;
  average: number;
  positive: number;
};

export const StatisticsTable = ({
  feedbackCounts,
  total,
  average,
  positive,
}: StatisticsTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th align="left">Name</th>
          <th align="left">Value</th>
        </tr>
      </thead>

      <tbody>
        <StatisticLine text="Good" value={feedbackCounts.good} />
        <StatisticLine text="Neutral" value={feedbackCounts.neutral} />
        <StatisticLine text="Bad" value={feedbackCounts.bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive} />
      </tbody>
    </table>
  );
};

/*** StatisticsSection ***/

type StatisticsSectionProps = {
  feedbackCounts: FeedbackCounts;
};

export const StatisticsSection = ({ feedbackCounts }: StatisticsSectionProps) => {
  const total = Object.values(feedbackCounts).reduce((acc, curr) => acc + curr, 0);
  const average = (feedbackCounts.good - feedbackCounts.bad) / total || 0;
  const positive = (feedbackCounts.good / total) * 100 || 0;

  return (
    <section>
      <h2>Statistics</h2>

      {total <= 0 && <p>No feedback given</p>}

      {total > 0 && (
        <StatisticsTable
          feedbackCounts={feedbackCounts}
          total={total}
          average={average}
          positive={positive}
        />
      )}
    </section>
  );
};
