import React, { useState } from "react";
import { Link } from 'react-router-dom';

import './notification.scss';

import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SentimentDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentDissatisfiedOutlined';
import BatteryAlertOutlinedIcon from '@mui/icons-material/BatteryAlertOutlined';
import BusAlertOutlinedIcon from '@mui/icons-material/BusAlertOutlined';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import MyImage from '../../assets/imgs/me.jpg';

const Notifications = ({setTheme}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme} />

      <div className="page-container">

        <Navbar setTheme={setTheme} />

        <div className="notifications-container">

          <div className='title'>
            <h2>Notifications</h2>
            <div className="dropdown">
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}><CheckOutlinedIcon /> Mark all as read</MenuItem>
                <MenuItem onClick={handleClose}><SettingsOutlinedIcon /> Notifications settings</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="notifications">
            <h3>Earlier</h3>
            <div className='collection'>
              <div className="notification not-read">
                <div className="img">
                  <img src={MyImage} alt='me' />
                  <div className="action"><BatteryAlertOutlinedIcon /></div>
                </div>
                <div className="text">
                  <h4>Action Type</h4>
                  <p>Ahmed, Yasser and Mahmoud reacted to a video you shared yesterday. Your caption was: "True men!" <br/> See real post</p>
                </div>
              </div>

              <div className="notification not-read">
                <div className="img">
                  <img src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'} alt='me' />
                  <div className="action"><SettingsOutlinedIcon /></div>
                </div>
                <div className="text">
                  <h4>Action Type</h4>
                  <p>Ahmed, Yasser and Mahmoud reacted to a video you shared yesterday. Your caption was: "True men!" <br/> See real post</p>
                </div>
              </div>

              <div className="notification not-read">
                <div className="img">
                  <img src={'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} alt='me' />
                  <div className="action"><FavoriteBorderOutlinedIcon /></div>
                </div>
                <div className="text">
                  <h4>Action Type</h4>
                  <p>Ahmed, Yasser and Mahmoud reacted to a video you shared yesterday. Your caption was: "True men!" <br/> See real post</p>
                </div>
              </div>

              <div className="notification not-read">
                <div className="img">
                  <img src={'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y'} alt='me' />
                  <div className="action"><SentimentDissatisfiedOutlinedIcon /></div>
                </div>
                <div className="text">
                  <h4>Too many reports of product of Name <strong>IPhone 11 pro max</strong></h4>
                  <p>Ahmed, Yasser and Mahmoud reacted to a video you shared yesterday. Your caption was: "True men!" <br/> See real post</p>
                </div>
              </div>

              <div className="notification">
                <div className="img">
                  <img src={'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y'} alt='me' />
                  <div className="action"><BusAlertOutlinedIcon /></div>
                </div>
                <div className="text">
                  <h4>Delivery Problem with product of ID <strong>145554562364</strong></h4>
                  <p>Ahmed, Yasser and Mahmoud reacted to a video you shared yesterday. Your caption was: "True men!" <br/> See real post</p>
                </div>
              </div>

              <div className="notification">
                <div className="img">
                  <img src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'} alt='me' />
                  <div className="action"><SettingsOutlinedIcon /></div>
                </div>
                <div className="text">
                  <h4>Action Type</h4>
                  <p>Ahmed, Yasser and Mahmoud reacted to a video you shared yesterday. Your caption was: "True men!" <br/> See real post</p>
                </div>
              </div>

              <div className="notification">
                <div className="img">
                  <img src={'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} alt='me' />
                  <div className="action"><FavoriteBorderOutlinedIcon /></div>
                </div>
                <div className="text">
                  <h4>Action Type</h4>
                  <p>Ahmed, Yasser and Mahmoud reacted to a video you shared yesterday. Your caption was: "True men!" <br/> See real post</p>
                </div>
              </div>

              <div className="notification">
                <div className="img">
                  <img src={'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y'} alt='me' />
                  <div className="action"><SentimentDissatisfiedOutlinedIcon /></div>
                </div>
                <div className="text">
                  <h4>Too many reports of product of Name <strong>IPhone 11 pro max</strong></h4>
                  <p>Ahmed, Yasser and Mahmoud reacted to a video you shared yesterday. Your caption was: "True men!" <br/> See real post</p>
                </div>
              </div>

              <div className="notification">
                <div className="img">
                  <img src={'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y'} alt='me' />
                  <div className="action"><BusAlertOutlinedIcon /></div>
                </div>
                <div className="text">
                  <h4>Delivery Problem with product of ID <strong>145554562364</strong></h4>
                  <p>Ahmed, Yasser and Mahmoud reacted to a video you shared yesterday. Your caption was: "True men!" <br/> See real post</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Notifications;