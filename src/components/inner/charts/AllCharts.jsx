import React, {PureComponent, useEffect, useState} from 'react';

import { Link } from 'react-router-dom';

import './all-chart.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import LineChartImage from '../../../assets/imgs/charts/line.png';
import AreaChartImage from '../../../assets/imgs/charts/area.png';
import PieChartImage from '../../../assets/imgs/charts/pie.png';
import RadialChartImage from '../../../assets/imgs/charts/radial.png';
import RadarChartImage from '../../../assets/imgs/charts/radar.png';
import ScatterChartImage from '../../../assets/imgs/charts/scatter.png';
import BarChartImage from '../../../assets/imgs/charts/bar.png';

const AllCharts = ({setTheme}) => {

  return (

    <div className="main-container">

      <Sidebar setTheme={setTheme} />

      <div className='page-container'>

        <Navbar setTheme={setTheme}/>

        <div className="all-charts-page">

          <h1>Charts</h1>

          <div className="charts-components">

            <Link className="chart-component" to='/components/charts/line'>

              <img src={LineChartImage} alt="Line Chart Image" />
              <h1>Line Chart</h1>

            </Link>

            <Link className="chart-component" to='/components/charts/area'>

              <img src={AreaChartImage} alt="Line Chart Image" />
              <h1>Area Charts</h1>

            </Link>

            <Link className="chart-component" to='/components/charts/pie'>

              <img src={PieChartImage} alt="Line Chart Image" />
              <h1>Pie Chart</h1>

            </Link>

            <Link className="chart-component" to='/components/charts/scatter'>

              <img src={ScatterChartImage} alt="Line Chart Image" />
              <h1>Scattering Charts</h1>

            </Link>

            <Link className="chart-component" to='/components/charts/radar'>

              <img src={RadarChartImage} alt="Line Chart Image" />
              <h1>Radar Charts</h1>

            </Link>

            <Link className="chart-component" to='/components/charts/radial'>

              <img src={RadialChartImage} alt="Line Chart Image" />
              <h1>Radial Charts</h1>

            </Link>

            <Link className="chart-component" to='/components/charts/bar'>

              <img src={BarChartImage} alt="Line Chart Image" />
              <h1>Bar Charts</h1>

            </Link>

            <Link className="chart-component" to='/components/charts/line'>

              <img src={LineChartImage} alt="Line Chart Image" />
              <h1>Line Chart</h1>

            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}

export default AllCharts;