import React from 'react';
import './settings.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import Button from '@mui/material/Button';

import { alpha, styled } from '@mui/material/styles';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';

import TextField from '@mui/material/TextField';

import Delete from '../../assets/imgs/delete.png';

import SettingsSidebar from "./SettingsSidebar";

const AccountSettings = ({setTheme}) => {

  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

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

          <div className="right-part ">

            <h2>Account Settings</h2>

            <div className="change-username add-margin">
              <h3>Change username</h3>
              <CssTextField InputLabelProps={{ style: { color: 'gray' } }} sx={{ borderColor: '#fff' }} id="outlined-basic" label="Username" variant="outlined" size='small' />
              <Button variant='contained' color={'secondary'}><SaveIcon /> Save username</Button>
            </div>

            <div className="delete-account add-margin full-width">
              <img src={Delete} alt="delete img" />
              <h2>Delete your account</h2>
              <p>Caution: Once you delete your account you can't restore it again forever!</p>
              <Button variant='contained' color={'error'}><DeleteOutlinedIcon /> Delete Account</Button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );

};

export default AccountSettings;