import React from 'react';
import './settings.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import CodeIcon from '@mui/icons-material/Code';
import GamepadIcon from '@mui/icons-material/Gamepad';
import CameraIcon from '@mui/icons-material/Camera';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';

import SettingsSidebar from "./SettingsSidebar";
import {Add} from "@mui/icons-material";
import {styled} from "@mui/material/styles";

const SocialSettings = ({setTheme}) => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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
      color: "gray",
      '& fieldset': {
        borderColor: '#555',
        color: 'lightgray',
      },

      '&:hover fieldset': {
        borderColor: 'gray',
        color: 'lightgray',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'gray',
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

            <h2>Social Media</h2>

            <div className="social-links">
              <div className='social'>
                <div className='text'>
                  <h5><FacebookIcon /> Facebook</h5>
                </div>
                <CssTextField size={'small'} defaultValue='/asaber.3030' />
              </div>

              <div className='social'>
                <div className="text">
                  <h5><GitHubIcon /> Github</h5>
                </div>
                <CssTextField size={'small'} defaultValue='/asaber.3030' />
              </div>

              <div className='social'>
                <div className="text">
                  <h5><TwitterIcon /> Twitter</h5>
                </div>
                <CssTextField size={'small'} defaultValue='/asaber.3030' />
              </div>

              <div className='social'>
                <div className="text">
                  <h5><InstagramIcon /> Instagram</h5>
                </div>
                <CssTextField size={'small'} defaultValue='/asaber.3030' />
              </div>

              <div className='social'>
                <div className="text">
                  <h5><LinkedInIcon /> Linkedin</h5>
                </div>
                <CssTextField size={'small'} defaultValue='/asaber.3030' />
              </div>

              <div className="add-new-social">
                <h3><Add /> New Social Link</h3>

                <div className="added">
                  <div className="select">
                    <FormControl sx={{ m: 1, minWidth: 120, borderColor: '#fff' }}>
                      <InputLabel id="demo-simple-select-autowidth-label">Social</InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        onChange={handleChange}
                        autoWidth
                        label="Social">
                        <MenuItem value={10}><PinterestIcon /> Pinterest</MenuItem>
                        <MenuItem value={21}><CodeIcon /> Codepen</MenuItem>
                        <MenuItem value={23}><CameraIcon /> Snapchat</MenuItem>
                        <MenuItem value={32}><GamepadIcon /> Twitch</MenuItem>
                        <MenuItem value={55}><ControlCameraIcon /> Tencent</MenuItem>
                      </Select>
                    </FormControl>
                  </div>

                  <CssTextField
                    id="outlined-helperText"
                    FormHelperTextProps={{ style: {color: 'gray'} }} InputLabelProps={{ style: { color: 'gray' } }}
                    label="Username for EX: asaber.3030"
                  />
                </div>

                <Button variant='contained'>Save Phone</Button>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );

};

export default SocialSettings;