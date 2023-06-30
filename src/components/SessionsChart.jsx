import './SessionsChart.css';
import propTypes from 'prop-types';
import {
  LineChart,
  Rectangle,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SessionsTooltips from "./SessionsTooltips.jsx";

export default function SessionsChart() {
  const data = [
    { day: 1, sessionLength: 30 },
    { day: 2, sessionLength: 23 },
    { day: 3, sessionLength: 45 },
    { day: 4, sessionLength: 50 },
    { day: 5, sessionLength: 0 },
    { day: 6, sessionLength: 0 },
    { day: 7, sessionLength: 60 },
  ];

  function CustomizedCursor({ points }) {
    return (
      <Rectangle
        fill="black"
        opacity={0.1}
        width={700}
        height={700}
        x={points[1].x}
        y={-20}
        overflow={"visible"}
        accentHeight={'120%'}

      />
    );
  }

  return (
    <div className="sessions-chart-container">
      <h3>Durée moyenne des sessions</h3>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="sessions-chart"
      >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 45,
            right: 5,
            bottom: 10,
            left: 5,
          }}
        >
          <XAxis
            dataKey="day"
            tick={{ fontSize: 12, stroke: "white", opacity: 0.8 }}
            dy={15}
            stroke="1 1"
            color="#fff"
          />
          <YAxis
            dataKey="sessionLength"
            tick={{ fontSize: 14 }}
            dx={-10}
            stroke="1 1"
            hide={true}
          />
          <Tooltip
            content={<SessionsTooltips />}
            cursor={<CustomizedCursor />}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 2, strokeWidth: 4, stroke: "white" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
