export type Feedback = "good" | "neutral" | "bad";

export type FeedbackCounts = {
  [key in Feedback]: number;
};
