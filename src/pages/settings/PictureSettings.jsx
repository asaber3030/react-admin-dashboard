import React, {useState} from 'react';
import './settings.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import Button from '@mui/material/Button';

import SettingsSidebar from "./SettingsSidebar";
import { Add } from "@mui/icons-material";

import MyPhoto from '../../assets/imgs/me.jpg';
import MyLogo from '../../assets/imgs/logo.png';
import UploadImage from '../../assets/imgs/upload.png';

const PictureSettings = ({setTheme}) => {

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

            <div className="images-container add-margin">

              <div className="upload-new-image">
                <div className="top">
                  <img src={UploadImage} alt=""/>
                </div>
                <div className="bottom">
                  <div className='input-file'>
                    <input type="file" />
                    <h4>Choose new picture</h4>
                  </div>
                </div>
              </div>

              <h3 className='title'>Choose an old image to apply!</h3>

              <div className="old-images">
                <img src={MyPhoto} alt="" />
                <img src={MyPhoto} alt="" />
                <img src={MyPhoto} alt="" />
                <img src={MyPhoto} alt="" />
                <img src={MyPhoto} alt="" />
              </div>

              <div className="save">
                <Button variant='contained'>Save Changes</Button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

};

export default PictureSettings;