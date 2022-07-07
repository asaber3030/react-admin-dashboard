import React from 'react';
import './home.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import TableList from "../../components/tablelist/TableList";

const Home = ({ setTheme }) => {
  return (
    <div className="home-page main-container">
      <Sidebar setTheme={setTheme} />
      <div className="home-container page-container">
        <Navbar setTheme={setTheme} />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="list-container">
          <div className="list-title">Latest Transactions</div>
          <TableList />
        </div>
      </div>
    </div>
  );

};

export default Home;