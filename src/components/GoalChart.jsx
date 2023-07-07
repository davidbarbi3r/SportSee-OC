import './GoalChart.css';
import { PieChart, Pie, ResponsiveContainer, Label, Cell } from "recharts";
import { formatGoal } from "../service/formatData";

const CustomLabel = ({ viewBox, value }) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text
          x={cx}
          y={cy - 10}
          className="recharts-text recharts-label"
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fontSize="26"
          fontWeight={600}
        >
          {value} %
        </text>
        <text
          x={cx}
          y={cy + 20}
          textAnchor="middle"
          dominantBaseline="central"
          alignmentBaseline="middle"
          fill="#74798C"
          fontSize="14"
        >
          de votre <br/> objectif
        </text>
      </g>
    );
  };

export default function GoalChart(props) {
  const data = formatGoal(props.score);

  if (!data) {
    return <div>ERROR</div>;
  }

  return (
    <div className="goal-chart-container">
      <h3>Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            fill="red"
          >
            <Cell key={`cell-0`} fill="#FF0000" />
            <Cell key={`cell-1`} fill="#FFF" />
            <Label
              content={<CustomLabel value={data[0].value * 100} />}
              position="center"
            />
          </Pie>
          <Pie data={[{name: '', value:1}, {name: '', value:1}]} cx="50%" cy="50%" innerRadius={0} outerRadius={80} fill="#fff">
          <Label
              content={<CustomLabel value={data[0].value * 100} />}
              position="center"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
