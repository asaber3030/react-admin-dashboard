import React from 'react';

import './single.scss';

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";

import SettingsIcon from '@mui/icons-material/Settings';
import { Email, Title, Phone, Build, LocationOnOutlined } from "@mui/icons-material";

import { users } from "../../data/data-table-source";
import TableList from "../../components/tablelist/TableList";
import {useParams} from "react-router-dom";

const Single = ({setTheme}) => {

  let {id} = useParams();

  const user = users.find(u => u.id == id);

  console.log(user);

  return (
    <div className="single-page main-container">

      <Sidebar setTheme={setTheme} />

      <div className="single-container page-container">

        <Navbar setTheme={setTheme} />

        <div className="top">

          <div className="left">

            <div className="edit-button"><SettingsIcon fontSize='small' /></div>

            <div className="item">

              <img src={ user.img } alt="User" />

              <div className="details">

                <h1 className='username'>{ user.name }</h1>

                <div className="detail-item">
                  <div className="detail-key"><Email /> Email</div>
                  <div className="detail-value">{ user.email }</div>
                </div>

                <div className="detail-item">
                  <div className="detail-key"><Title /> Phone</div>
                  <div className="detail-value">{ user.phone }</div>
                </div>

                <div className="detail-item">
                  <div className="detail-key"><Phone /> Job Title</div>
                  <div className="detail-value">{ user.job }</div>
                </div>

                <div className="detail-item">
                  <div className="detail-key"><Build /> Company</div>
                  <div className="detail-value">{ user.company }</div>
                </div>

                <div className="detail-item">
                  <div className="detail-key"><LocationOnOutlined /> Address</div>
                  <div className="detail-value">{ user.address }</div>
                </div>

              </div>

            </div>

          </div>

          <div className="right">
            <Chart aspect={3/1} />
          </div>

        </div>

        <div className="bottom" style={{ width: "100%" }}>
          <h1>User latest transactions</h1>
          <TableList />
        </div>

      </div>

    </div>

  );

};

export default Single;