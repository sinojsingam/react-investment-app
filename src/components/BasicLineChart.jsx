import { LineChart } from "@mui/x-charts/LineChart";

export default function BasicLineChart({ data }) {
  console.log(data);
  const years = [...Array(data.length).keys()];
  const investment = data.map((item) => item.valueEndOfYear);
  return (
    <LineChart
      className="center"
      xAxis={[{ data: years }]}
      series={[
        {
          data: investment,
        },
      ]}
      width={500}
      height={300}
    />
  );
}
