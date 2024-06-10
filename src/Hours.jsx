import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { hour: "01.00 - 01.59", count: "47" },
  { hour: "02.00 - 02.59", count: "34" },
  { hour: "10.00 - 10.59", count: "20" },
  { hour: "11.00 - 11.59", count: "53" },
  { hour: "12.00 - 12.59", count: "31" },
  { hour: "13.00 - 13.59", count: "49" },
  { hour: "14.00 - 14.59", count: "121" },
  { hour: "15.00 - 15.59", count: "228" },
  { hour: "16.00 - 16.59", count: "146" },
  { hour: "17.00 - 17.59", count: "67" },
  { hour: "18.00 - 18.59", count: "101" },
  { hour: "19.00 - 19.59", count: "20" },
  { hour: "20.00 - 20.59", count: "17" },
  { hour: "21.00 - 21.59", count: "4" },
  { hour: "22.00 - 22.59", count: "43" },
  { hour: "23.00 - 23.59", count: "55" },
];

const all = data.reduce((a, b) => a + Number(b.count), 0);

// Verileri sayısal değerlere dönüştür
const formattedData = data.map((item) => ({
  hour: item.hour,
  count: parseInt(item.count, 10),
}));

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
  "#FF6384",
  "#36A2EB",
  "#FFCE56",
  "#4BC0C0",
  "#9966FF",
  "#FF9F40",
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function UsagePieChart() {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={formattedData}
        dataKey="count"
        nameKey="hour"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
        label={renderCustomizedLabel}
      >
        {formattedData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
