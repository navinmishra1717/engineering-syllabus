
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MarksDistributionProps {
  distribution: {
    internal: number;
    external: number;
    practical: number;
  };
}

const MarksDistributionChart: React.FC<MarksDistributionProps> = ({
  distribution,
}) => {
  const data = [
    { name: "Internal", value: distribution.internal, color: "#3E92CC" },
    { name: "External", value: distribution.external, color: "#0A2463" },
    { name: "Practical", value: distribution.practical, color: "#FB8B24" },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="border-2 border-muted h-full">
      <CardHeader>
        <CardTitle className="text-xl">Marks Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value: number) => [`${value} (${((value / total) * 100).toFixed(1)}%)`, "Marks"]}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {data.map((item) => (
            <div key={item.name} className="p-2 rounded-md" style={{ backgroundColor: `${item.color}20` }}>
              <p className="font-medium text-sm" style={{ color: item.color }}>
                {item.name}
              </p>
              <p className="text-lg font-bold">
                {item.value}
                <span className="text-xs text-muted-foreground ml-1">
                  /{total}
                </span>
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MarksDistributionChart;
