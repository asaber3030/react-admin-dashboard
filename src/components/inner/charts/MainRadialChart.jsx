import React from 'react';

import './all-chart.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import ChartsMenu from "./ChartsMenu";

import SimpleRadialChart from "./inside-charts/radial-charts/SimpleRadialChart";
import ImageRadiar from "../../../assets/imgs/charts/radial.png";

const MainAreaChart = ({setTheme}) => {

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme}/>

      <div className='page-container'>

        <Navbar setTheme={setTheme}/>

        <div className="inner-charts-page">

          <div className="my-charts">

            <div className="title">
              <h1 className='heading-title'><img src={ImageRadiar} alt='for' /> Radial Chart</h1>
              <ChartsMenu />
            </div>

            <div className="charts-container">

              <div className="chart">

                <SimpleRadialChart />

              </div>


            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MainAreaChart;