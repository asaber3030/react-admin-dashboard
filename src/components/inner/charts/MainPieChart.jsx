import React from 'react';

import './all-chart.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import ChartsMenu from "./ChartsMenu";

import SimplePieChart from "./inside-charts/pie-charts/SimplePieChart";
import ImagePie from "../../../assets/imgs/charts/pie.png";

const MainAreaChart = ({setTheme}) => {

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme}/>

      <div className='page-container'>

        <Navbar setTheme={setTheme}/>

        <div className="inner-charts-page">

          <div className="my-charts">

            <div className="title">
              <h1 className='heading-title'><img src={ImagePie} alt='for' /> Pie Chart</h1>
              <ChartsMenu />
            </div>

            <div className="charts-container">

              <div className="chart">

                <SimplePieChart />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MainAreaChart;