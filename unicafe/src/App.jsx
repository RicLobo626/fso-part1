import { useState } from "react";
import { FeedbackSection, StatisticsSection } from "./components";

const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (feedback) => {
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
