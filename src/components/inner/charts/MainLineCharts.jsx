import React from 'react';

import './all-chart.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import SimpleLineChart from "./inside-charts/line-charts/SimpleLineChart";

import ChartsMenu from "./ChartsMenu";
import ImageLine from "../../../assets/imgs/charts/line.png";

const MainLineChart = ( {setTheme} ) => {

  return (
    <div className="main-container">
      <Sidebar setTheme={setTheme}/>

      <div className='page-container'>

        <Navbar setTheme={setTheme}/>

        <div className="inner-charts-page">

          <div className="my-charts">

            <div className="title">
              <h1 className='heading-title'><img src={ImageLine} alt='for' /> Line Chart</h1>
              <ChartsMenu />
            </div>

            <div className="charts-container">

              <div className="chart">

                <SimpleLineChart />

              </div>


            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MainLineChart;