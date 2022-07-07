import React from 'react';

import './all-chart.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import ChartsMenu from "./ChartsMenu";

import SimpleBarChart from "./inside-charts/bar-charts/SimpleBarChart";
import ImageBar from "../../../assets/imgs/charts/bar.png";

const MainAreaChart = ({setTheme}) => {

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme}/>

      <div className='page-container'>

        <Navbar setTheme={setTheme}/>

        <div className="inner-charts-page">

          <div className="my-charts">

            <div className="title">
              <h1 className='heading-title'><img src={ImageBar} alt='for' /> Bar Chart</h1>
              <ChartsMenu />
            </div>

            <div className="charts-container">

              <div className="chart">

                <SimpleBarChart />

              </div>


            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MainAreaChart;