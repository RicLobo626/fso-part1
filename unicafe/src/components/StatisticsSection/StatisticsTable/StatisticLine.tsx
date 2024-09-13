type Props = {
  text: string;
  value: number;
};

export const StatisticLine = ({ text, value }: Props) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
