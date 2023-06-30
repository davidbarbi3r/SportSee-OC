import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { formatPerformance } from "../service/formatData";

const data = [
  {
    subject: "Cardio",
    A: 80,
    fullMark: 280,
  },
  {
    subject: "Energy",
    A: 120,
    fullMark: 280,
  },
  {
    subject: "Endurance",
    A: 140,
    fullMark: 280,
  },
  {
    subject: "Strength",
    A: 50,
    fullMark: 280,
  },
  {
    subject: "Speed",
    A: 200,
    fullMark: 280,
  },
  {
    subject: "Intensity",
    A: 90,
    fullMark: 280,
  },
];

export default function StrenghtChart(props) {
  const datatest = props.performanceData.data;
  const data = formatPerformance(datatest);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="55%" data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" />
        {/* <PolarRadiusAxis /> */}
        <Radar
          dataKey="A"
          stroke="#fff"
          fill="red"
          fillOpacity={0.7}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
