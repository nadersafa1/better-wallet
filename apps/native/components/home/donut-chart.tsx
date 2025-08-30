import React from "react";
import { Pie, PolarChart } from "victory-native";

interface DonutChartProps {
  data: Array<{
    label: string;
    value: number;
    color: string;
  }>;
}

const DonutChart = ({ data }: DonutChartProps) => {
  return (
    <PolarChart data={data} labelKey="label" valueKey="value" colorKey="color">
      <Pie.Chart innerRadius="60%" />
    </PolarChart>
  );
};

export default DonutChart;
