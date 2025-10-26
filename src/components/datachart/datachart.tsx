import React from "react";
import TimeseriesChart from "../../shared-components/chart/timeseries-chart";
import { useTimeseries } from "../../custom-hooks/use-timeseries.hook";
import "./datachart.scss";
const DataChart: React.FC = () => {
  const { loading, error, chartData } = useTimeseries();

  return (
    <div className="datachart">
      <div className="chart-section">
        <TimeseriesChart
          labels={chartData.labels}
          values={chartData.values}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};
export default DataChart;
