import { FeedbackSection } from "src/components";
import { Feedback } from "src/types";

const App = () => {
  const handleFeedback = (val: Feedback) => {
    console.log(val); // good, neutral, bad
  };

  return (
    <main>
      <FeedbackSection onFeedback={handleFeedback} />
    </main>
  );
};

export default App;
