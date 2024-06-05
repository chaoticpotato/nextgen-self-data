import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { usage, dates, userz } from './data';

const processData = (usage) => {
  const processedData = [];
  const parsedUsage = usage;

  dates.forEach((date) => {
    processedData.push({
      date: date,
      action_count: parsedUsage[date] ? parsedUsage[date].action_count : 0,
      question_count: parsedUsage[date] ? parsedUsage[date].question_count : 0,
    });
  });

  return processedData;
};

const UserChart = ({ user }) => {
  const chartData = processData(user.usage);

  const userObj = userz[user.user_id];
  const dataObj = usage.find((a) => a.user_id === user.user_id);
  console.log(user.user_id, '**', dataObj);

  return (
    <div className="student">
      <div className="info">
        <h2>{userObj.name}</h2>
        <div>
          <div>Toplam Aksiyon: {dataObj.total_a}</div>
          <div>Toplam Çözüm: {dataObj.total_q}</div>
        </div>
      </div>
      <LineChart
        width={800}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis domain={[0, 80]} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="action_count"
          name="Aksiyon sayısı"
          stroke="#8884d8"
        />
        <Line
          type="monotone"
          dataKey="question_count"
          name="Çözülen Soru"
          stroke="#82ca9d"
        />
      </LineChart>
    </div>
  );
};

const UsageCharts = () => {
  return (
    <div>
      {usage.map((user) => (
        <UserChart key={user.user_id} user={user} />
      ))}
    </div>
  );
};

export default UsageCharts;
