import './DailyActivityChart.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Tooltips from "./Tooltips.jsx";

const data = [
  {
    date: "1",
    kilogram: 80,
    calories: 240,
  },
  {
    date: "2",
    kilogram: 80,
    calories: 220,
  },
  {
    date: "3",
    kilogram: 81,
    calories: 240,
  },
  {
    date: "4",
    kilogram: 81,
    calories: 290,
  },
  {
    date: "5",
    kilogram: 80,
    calories: 160,
  },
  {
    date: "6",
    kilogram: 78,
    calories: 162,
  },
  {
    date: "7",
    kilogram: 76,
    calories: 390,
  },
];

export default function DailyActivityChart() {
  return (
    <>
      <div className="activity-chart-description">
        <h3>Activité quotidienne</h3>
        <div className="activity-chart-legend">
          <div className="details">
            <span className="icon icon-black"></span>
            <p>Poids (kg)</p>
          </div>
          <div className="details">
            <span className="icon icon-red"></span>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="70%">
        <BarChart data={data} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="date"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
            stroke="1 1"
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            tickCount="5"
            domain={["dataMin - 2", "dataMax + 1"]}
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={["dataMin - 10", "dataMax + 10"]}
            hide={true}
          />
          <Tooltip content={
            <Tooltips  />
          }/>
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#e60000"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
