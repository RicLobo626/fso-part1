import { Button } from "src/components";
import { Feedback } from "src/types";

type Props = {
  onFeedback: (feedback: Feedback) => void;
};

export const FeedbackSection = ({ onFeedback }: Props) => {
  const handleClickGood = () => onFeedback("good");
  const handleClickNeutral = () => onFeedback("neutral");
  const handleClickBad = () => onFeedback("bad");

  return (
    <section>
      <h1>Give feedback</h1>

      <Button text="Good" onClick={handleClickGood} />
      <Button text="Neutral" onClick={handleClickNeutral} />
      <Button text="Bad" onClick={handleClickBad} />
    </section>
  );
};
