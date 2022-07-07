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
import {Edit, Email} from "@mui/icons-material";
import {styled} from "@mui/material/styles";

const EmailSettings = ({setTheme}) => {

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

            <h2>Available E-mails</h2>

            <div className="emails add-margin">
              <div className='email'>
                <h5><Email /> abdulrahmansaber120@gmail.com</h5>
                <div className="action">
                  <Button><Edit size={'small'} /></Button>
                  <Button><DeleteOutlinedIcon size={'small'} color={'error'} /></Button>
                </div>
              </div>

              <div className='email'>
                <h5><Email /> asaber@gmail.com</h5>
                <div className="action">
                  <Button><Edit size={'small'} /></Button>
                  <Button><DeleteOutlinedIcon size={'small'} color={'error'} /></Button>
                </div>
              </div>

              <div className='email'>
                <h5><Email /> company.asaber@asaber.com</h5>
                <div className="action">
                  <Button><Edit size={'small'} /></Button>
                  <Button><DeleteOutlinedIcon size={'small'} color={'error'} /></Button>
                </div>
              </div>

              <div className='email'>
                <h5><Email /> contact@asaber.com</h5>
                <div className="action">
                  <Button size={'small'}><Edit size={'small'} /></Button>
                  <Button size={'small'}><DeleteOutlinedIcon size={'small'} color={'error'} /></Button>
                </div>
              </div>

              <div className="add-new-email">
                <h3>Add new Email address</h3>
                <CssTextField FormHelperTextProps={{ style: {color: 'gray'} }} InputLabelProps={{ style: { color: 'gray' } }} id="outlined-basic" helperText='Must be unique' label="New E-mail Address" variant="outlined" size='small' />
                <Button variant='contained'>Save Email</Button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

};

export default EmailSettings;