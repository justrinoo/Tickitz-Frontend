import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { getDashboard } from "../../store/actions/user";
const ChartMovie = (props) => {
  let setDataMonth = [];
  let setDataCount = [];
  const statistic = JSON.parse(localStorage.getItem("dataStatistic"));
  if (!statistic) {
    null;
  } else {
    statistic.map((value) => {
      const bulan = value.month;
      const total = value.total;
      const setNewDataCount = total.split(" ");
      const setNewDataMonth = bulan.split(" ");
      setDataCount.push(setNewDataCount.join(""));
      setDataMonth.push(setNewDataMonth.join(""));
    });
  }
  const labels = setDataMonth;
  const totalCount = setDataCount;
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Statistic Movie",
        backgroundColor: "#5F2EEA",
        borderColor: "#5F2EEA",
        data: totalCount.length > 0 ? totalCount : null
      }
    ]
  };
  const config = {
    type: "line",
    data: data,
    options: {
      responsive: true
    }
  };

  return (
    <>
      <Line data={data} options={config} />
    </>
  );
};

const mapDispatchToProps = {
  getDashboard
};

export default connect(null, mapDispatchToProps)(ChartMovie);
