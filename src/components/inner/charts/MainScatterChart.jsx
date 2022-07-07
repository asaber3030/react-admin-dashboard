import React from 'react';

import './all-chart.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import ChartsMenu from "./ChartsMenu";

import SimpleScatterChart from "./inside-charts/scatter-charts/SimpleScatterChart";
import ImageScatter from "../../../assets/imgs/charts/scatter.png";

const MainAreaChart = ({setTheme}) => {

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme}/>

      <div className='page-container'>

        <Navbar setTheme={setTheme}/>

        <div className="inner-charts-page">

          <div className="my-charts">

            <div className="title">
              <h1 className='heading-title'><img src={ImageScatter} alt='for' /> Scatter Chart</h1>
              <ChartsMenu />
            </div>

            <div className="charts-container">

              <div className="chart">

                <SimpleScatterChart />

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MainAreaChart;