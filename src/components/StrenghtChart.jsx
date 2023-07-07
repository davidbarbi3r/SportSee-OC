import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import { formatPerformance } from "../service/formatData";

export default function StrenghtChart(props) {
  const datatest = props.performanceData.data;
  const data = formatPerformance(datatest);

  if (!data) {
    return <div>ERROR</div>;
  }
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="55%" data={data}>
        <PolarGrid
          radialLines={false}
          gridType="polygon"
          polarRadius={[10, 20, 35, 50, 65]}
        />
        <PolarAngleAxis
          dataKey="subject"
          stroke="#FFFFFF"
          tickLine={false}
          axisLine={false}
          tick={{ fontSize: 10 }}
        />
        <Radar dataKey="A" stroke="#fff" fill="red" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
