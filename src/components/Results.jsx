import { formatter } from "../util/investment";

export default function Results({ data }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          {/* <th>Invested Capital</th> */}
        </tr>
      </thead>
      <tbody>
        {data.map((val, key) => {
          return (
            //formatter.format(1000)
            <tr key={key}>
              <td>{val.year}</td>
              <td>{formatter.format(val.interest)}</td>
              <td>{formatter.format(val.valueEndOfYear)}</td>
              <td>{formatter.format(val.annualInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
