import { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    kilogram: 80,
    calories: 240,
  },
  {
    name: "2",
    kilogram: 80,
    calories: 220,
  },
  {
    name: "3",
    kilogram: 81,
    calories: 240,
  },
  {
    name: "4",
    kilogram: 81,
    calories: 290,
  },
  {
    name: "5",
    kilogram: 80,
    calories: 160,
  },
  {
    name: "6",
    kilogram: 78,
    calories: 162,
  },
  {
    name: "7",
    kilogram: 76,
    calories: 390,
  },
];

const domain = [
    Math.min(...data.map((item) => item.calories))-10,
    Math.max(...data.map((item) => item.calories))+10,
  ];

    console.log(domain);

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={8}
          barCategoryGap={1}
        >
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="name"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
            stroke="1 1"
          />
          <YAxis
            dataKey="kilogram"
            tickCount="5"
            domain={[
                Math.min(...data.map((item) => item.kilogram))-5,
                Math.max(...data.map((item) => item.kilogram))+5,
              ]}
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
           <YAxis
            dataKey="calories"
            domain={[
                Math.min(...data.map((item) => item.calories))-10,
                Math.max(...data.map((item) => item.calories))+10,
              ]}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
          <Bar dataKey="calories" fill="#e60000" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
