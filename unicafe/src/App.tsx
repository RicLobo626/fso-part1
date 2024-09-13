import { useState } from "react";
import { FeedbackSection, StatisticsSection } from "src/components";
import { Feedback, FeedbackCounts } from "src/types";

const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState<FeedbackCounts>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (feedback: Feedback) => {
    setFeedbackCounts((prev) => ({ ...prev, [feedback]: prev[feedback] + 1 }));
  };

  return (
    <main>
      <FeedbackSection onFeedback={handleFeedback} />
      <StatisticsSection feedbackCounts={feedbackCounts} />
    </main>
  );
};

export default App;
