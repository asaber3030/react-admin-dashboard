import React from 'react';
import './settings.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import Button from '@mui/material/Button';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';

import TextField from '@mui/material/TextField';

import Delete from '../../assets/imgs/delete.png';

import SettingsSidebar from "./SettingsSidebar";
import {styled} from "@mui/material/styles";

const PersonalSettings = ({setTheme}) => {
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'lightgray',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
      color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      color: "gray",
      '& fieldset': {
        borderColor: '#555',
        color: 'lightgray',
      },

      '&:hover fieldset': {
        borderColor: '#222',
        color: 'lightgray',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#222',
      },

    },
  });
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

            <h2>Change My Personal Information</h2>

            <div className="personal-part-container add-margin">
              <div className="left">
                <div className="change-personal">
                  <div className='content'>
                    <CssTextField FormHelperTextProps={{ style: {color: 'gray'} }} InputLabelProps={{ style: { color: 'gray' } }} id="outlined-basic" helperText='Job title: Full stack web developer' label="Job title" variant="outlined" size='small' />
                  </div>
                  <div className='content'>
                    <CssTextField FormHelperTextProps={{ style: {color: 'gray'} }} InputLabelProps={{ style: { color: 'gray' } }} id="outlined-basic" helperText='Valid url required!' label="Website url" variant="outlined" size='small' />
                  </div>
                  <div className='content'>
                    <CssTextField FormHelperTextProps={{ style: {color: 'gray'} }} InputLabelProps={{ style: { color: 'gray' } }} id="outlined-basic" label="Main Phone" variant="outlined" size='small' helperText='Must be valid +20 Egyptain number' />
                  </div>
                  <div className='content'>
                    <CssTextField FormHelperTextProps={{ style: {color: 'gray'} }} InputLabelProps={{ style: { color: 'gray' } }} id="outlined-basic" label="Main Email Address" variant="outlined" size='small' helperText='Must be valid because this will appear in main profile and help users to contact' />
                  </div>
                  <div className='content'>
                    <CssTextField FormHelperTextProps={{ style: {color: '#000'} }} InputLabelProps={{ style: { color: 'gray' } }} id="outlined-basic" label="Company name" variant="outlined" size='small' />
                  </div>
                  <Button variant='contained'><SaveIcon /> Save Changes</Button>
                </div>
              </div>

              <div className="right contact-information">
                <h3>My Information</h3>
                <ul>
                  <li><span>Job Title</span> <span>Full stack web developer</span></li>
                  <li><span>Website</span> <span><a href="#">Visit</a></span></li>
                  <li><span>E-mail Address</span> <span>abdulrahman@asaber.com</span></li>
                  <li><span>Phone Number</span> <span>+20 11 22 33 455</span></li>
                  <li><span>Birthday</span> <span>25, Feb 2002</span></li>
                  <li><span>Company</span> <span>Facebook Inc.</span></li>

                </ul>
                <p className='bio'>I'm A Full stack web developer</p>
              </div>
            </div>


          </div>

        </div>

      </div>

    </div>
  );

};

export default PersonalSettings;