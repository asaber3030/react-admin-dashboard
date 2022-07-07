import React from 'react';

import './list.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/datatable/DataTable";

const List = ({ cols, actions, data, title, load, globalActions, titleIcon, setTheme }) => {
  return (
    <div className="list-page">
      <Sidebar setTheme={setTheme} />
      <div className="list-container">
        <Navbar setTheme={setTheme} />
        <DataTable cols={cols} actions={actions} data={data} title={title} load={load} globalActions={globalActions} titleIcon={titleIcon} />
      </div>
    </div>
  );

};

export default List;