import React from 'react';

import './all-chart.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import ChartsMenu from "./ChartsMenu";

import SimpleAreaChart from "./inside-charts/area-charts/SimpleAreaChart";

import ImageArea from '../../../assets/imgs/charts/area.png';

const MainAreaChart = ({setTheme}) => {

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme}/>

      <div className='page-container'>

        <Navbar setTheme={setTheme}/>

        <div className="inner-charts-page">

          <div className="my-charts">

            <div className="title">
              <h1 className='heading-title'><img src={ImageArea} alt='for' /> Area Chart</h1>
              <ChartsMenu />
            </div>


            <div className="charts-container">

              <div className="chart">

                <SimpleAreaChart />

              </div>


            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MainAreaChart;