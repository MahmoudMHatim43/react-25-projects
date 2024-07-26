import React from "react";
import Chart from "react-apexcharts";
import { Box } from "@chakra-ui/react";
import { ExpenseGlobalContext } from "../Context/ExpenseGlobalState";
const options = {
  labels: ["Total Income", "Total Expense"],
  colors: ["#06d634", "#d60609"],
  chart: {
    minWidth: "200px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: true,
  },
  dataLabels: {
    enabled: true,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#06d634", "#d60609"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};
function ChartSummary() {
  const { totalIncome, totalExpenses } = React.useContext(ExpenseGlobalContext);
  return (
    <Box>
      <Chart
        options={options}
        series={[totalIncome, totalExpenses]}
        type="pie"
        width="100%"
        height="100%"
      />
    </Box>
  );
}

export default ChartSummary;
