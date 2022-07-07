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
import {Css, Edit, Email, Phone} from "@mui/icons-material";
import {styled} from "@mui/material/styles";

const PhoneSettings = ({setTheme}) => {
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

            <h2>Published Phone numbers</h2>

            <div className="phones add-margin">
              <div className='phone'>
                <h5><Phone /> +20 11 22 33 44 55</h5>
                <div className="action">
                  <Button><Edit size={'small'} /></Button>
                  <Button><DeleteOutlinedIcon size={'small'} color={'error'} /></Button>
                </div>
              </div>

              <div className='phone'>
                <h5><Phone /> +20 11 22 33 44 55</h5>
                <div className="action">
                  <Button><Edit size={'small'} /></Button>
                  <Button><DeleteOutlinedIcon size={'small'} color={'error'} /></Button>
                </div>
              </div>

              <div className='phone'>
                <h5><Phone /> +20 11 22 33 44 55</h5>
                <div className="action">
                  <Button><Edit size={'small'} /></Button>
                  <Button><DeleteOutlinedIcon size={'small'} color={'error'} /></Button>
                </div>
              </div>

              <div className='phone'>
                <h5><Phone /> +20 11 22 33 44 55</h5>
                <div className="action">
                  <Button size={'small'}><Edit size={'small'} /></Button>
                  <Button size={'small'}><DeleteOutlinedIcon size={'small'} color={'error'} /></Button>
                </div>
              </div>

              <div className="add-new-phone">
                <h3>New Phone Number</h3>
                <CssTextField
                  id="outlined-helperText"
                  label="New Phone"
                  size={'small'}
                  FormHelperTextProps={{ style: {color: 'gray'} }} InputLabelProps={{ style: { color: 'gray' } }}
                  helperText="Must be new email and you haven't added it before."
                />
                <Button variant='contained'>Save Phone</Button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

};

export default PhoneSettings;