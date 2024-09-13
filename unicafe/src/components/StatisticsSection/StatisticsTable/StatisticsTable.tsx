import { FeedbackCounts } from "src/types";
import { StatisticLine } from "./StatisticLine";

type Props = {
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
}: Props) => {
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
