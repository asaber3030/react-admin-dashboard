import React from 'react';
import './settings.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import Button from '@mui/material/Button';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';

import { styled } from '@mui/material/styles';

import TextField from '@mui/material/TextField';

import Delete from '../../assets/imgs/delete.png';

import SettingsSidebar from "./SettingsSidebar";

const ChangePassword = ({setTheme}) => {

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'lightgray',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
      color: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      color: "#FFF",
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

            <h2>Change Password</h2>

            <div className="change-password add-margin">
              <div className='content'>
                <CssTextField FormHelperTextProps={{ style: {color: 'gray'} }} InputLabelProps={{ style: { color: 'gray' } }} id="outlined-basic" helperText='Must be equal to your old password' label="Old password" variant="outlined" size='small' />

              </div>
              <div className='content'>
                <CssTextField FormHelperTextProps={{ style: {color: 'gray'} }} InputLabelProps={{ style: { color: 'gray' } }} id="outlined-basic" helperText='Must contains 8 letters have (special characters, numbers, camel case letters)' label="New password" variant="outlined" size='small' />
              </div>
              <div className='content'>
                <CssTextField FormHelperTextProps={{ style: {color: 'gray'} }} InputLabelProps={{ style: { color: 'gray' } }} id="outlined-basic" label="Confirm Password" variant="outlined" size='small' helperText='Must be equal to your new password' />
              </div>
              <Button variant='contained'><SaveIcon /> Save Password</Button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );

};

export default ChangePassword;