import { FeedbackCounts } from "src/types";
import { StatisticsTable } from "src/components";

type Props = {
  feedbackCounts: FeedbackCounts;
};

export const StatisticsSection = ({ feedbackCounts }: Props) => {
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
