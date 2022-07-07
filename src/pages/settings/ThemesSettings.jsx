import React from 'react';
import './settings.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import Button from '@mui/material/Button';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';

import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import DarkMode from '../../assets/imgs/dark.svg';
import LightMode from '../../assets/imgs/light.svg';

import SettingsSidebar from "./SettingsSidebar";

import {DarkModeOutlined, Edit, Email, Phone} from "@mui/icons-material";

const ThemesSettings = ({setTheme}) => {

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme} />

      <div className="page-container">

        <Navbar setTheme={setTheme} />

        <div className="settings-container">

          <div className="left-part">
            <SettingsSidebar />
          </div>

          <div className="right-part">

            <h2><DarkModeOutlined size={'large'} /> Available Themes</h2>

            <div className="themes-container">

              <div className="themes">

                <div className="whole-theme">
                  <div className="theme">
                    <img src={LightMode} alt='Light mode' />
                    <h4>Light Mode <span>(on)</span></h4>
                  </div>

                  <FormControlLabel value="first" control={<Radio />} label="Choose" />
                </div>

                <div className="whole-theme">
                  <div className="theme">
                    <img src={DarkMode} alt='Dark mode' />
                    <h4>Dark Mode</h4>
                  </div>
                  <FormControlLabel value="second" control={<Radio />} label="Choose" />
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

};

export default ThemesSettings;