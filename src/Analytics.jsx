import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const userData = [
  { month: "Jan", year: 2024, users: 120, sales: 10000 },
  { month: "Feb", year: 2024, users: 150, sales: 15000 },
  { month: "Mar", year: 2024, users: 180, sales: 20000 },
  { month: "Apr", year: 2024, users: 100, sales: 25000 },
  { month: "May", year: 2024, users: 250, sales: 30000 },
  { month: "Jun", year: 2024, users: 300, sales: 35000 },
  { month: "Jul", year: 2024, users: 150, sales: 40000 },
  { month: "Aug", year: 2024, users: 400, sales: 45000 },
  { month: "Sep", year: 2024, users: 450, sales: 45000 },
  { month: "Oct", year: 2024, users: 300, sales: 50000 },
  { month: "Nov", year: 2024, users: 550, sales: 55000 },
  { month: "Dec", year: 2024, users: 900, sales: 65000 },
];

const salesData = [
  { name: "Jan", sales: 10000 },
  { name: "Feb", sales: 15000 },
  { name: "Mar", sales: 20000 },
  { name: "Apr", sales: 25000 },
  { name: "May", sales: 30000 },
  { name: "Jun", sales: 35000 },
  { name: "Jul", sales: 40000 },
  { name: "Aug", sales: 45000 },
  { name: "Sep", sales: 50000 },
  { name: "Oct", sales: 55000 },
  { name: "Nov", sales: 60000 },
  { name: "Dec", sales: 65000 },
];

const revenueData = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 7000 },
  { month: "Mar", revenue: 9000 },
  { month: "Apr", revenue: 11000 },
  { month: "May", revenue: 13000 },
  { month: "Jun", revenue: 15000 },
  { month: "Jul", revenue: 17000 },
  { month: "Aug", revenue: 19000 },
  { month: "Sep", revenue: 21000 },
  { month: "Oct", revenue: 23000 },
  { month: "Nov", revenue: 25000 },
  { month: "Dec", revenue: 27000 },
];

const style = {
  color: "red",
  fontSize: "16px",
};

const Analytics = () => {
  return (
    <div className="my-10  items-center gap-10 p-5">
      {/* {Radar charts} */}
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="bg-white p-5 rounded-2xl shadow-lg">
          <h2 className="text-lg font-bold text-center mb-3">
            User Registration
          </h2>
          <RadarChart
            // className="bg-[#808077]"
            cx={200}
            cy={150}
            outerRadius={100}
            width={400}
            height={300}
            data={userData}
          >
            <PolarGrid />
            <PolarAngleAxis
              dataKey="month"
              tick={{ className: "text-yellow text-sm " }}
            />
            <PolarRadiusAxis />
            <Tooltip />
            <Radar
              name="Sales"
              dataKey="sales"
              fill="#fdfde4"
              stroke="#808077"
              fillOpacity={0.6}
            />
            <Radar
              name="Users"
              dataKey="users"
              fill="#eeecec"
              stroke="#8884d8"
            />
            <Legend />
          </RadarChart>
        </div>
        {/* {Radial-Bar Chart} */}

        <div className="bg-white p-5 rounded-2xl shadow-lg">
          <h2 className="text-lg font-bold text-center mb-3">Monthly Sales</h2>
          <RadialBarChart
            data={salesData}
            barSize={15}
            outerRadius={140}
            innerRadius={20}
            cy={150}
            cx={200}
            height={300}
            width={400}
          >
            <RadialBar
              fill="#82ca9d"
              background
              dataKey="sales"
              label={{
                position: "insideStart",
                fill: "black",
                fontSize: "10px",
                padding: "20px",
              }}
              minAngle={10}
            />
            <Legend
              iconSize={10}
              layout="vertical"
              wrapperStyle={{
                left: 1,
                color: "dimgray",
                padding: "0px 5px",
                fontFamily: "monospace",
              }}
              verticalAlign="top"
            />
            <Tooltip
              formatter={(value, name, props) => {
                return [`${value} Sales`, `Month: ${props.payload.name}`];
              }}
            />
          </RadialBarChart>
        </div>
      </div>
      {/* {Bar chart} */}
      <div className="bg-white text-[#bb9fdb] p-5 rounded-2xl shadow-lg flex justify-center my-10 flex-col items-center">
        <h2 className="text-lg font-bold text-center mb-3">Monthly Revenue</h2>
        <BarChart width={600} height={300} data={revenueData}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#bb9fdb" />
        </BarChart>
      </div>
    </div>
  );
};

export default Analytics;
