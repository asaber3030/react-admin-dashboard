import React from 'react';
import './settings.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SaveIcon from '@mui/icons-material/Save';

import Maintenance from '../../assets/imgs/maintenance.png';

import SettingsSidebar from "./SettingsSidebar";

const Settings = ({setTheme}) => {

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

            <h2>Website Settings</h2>

            <ul className='options'>
              <li>
                <span className='df'><DarkModeIcon /> Default users themes<strong> (dark)</strong></span>
                <span><Switch /></span>
              </li>
              <li>
                <span className='df'><PeopleAltIcon /> User must verify e-mails to order</span>
                <span><Switch /></span>
              </li>
              <li>
                <span className='df'><ShoppingCartCheckoutIcon /> Product that status is equal to 0 doesn't appear in search</span>
                <span><Switch defaultChecked /></span>
              </li>
              <li>
                <span className='df'><RemoveShoppingCartIcon /> Out of stock products doesn't appear in search</span>
                <span><Switch defaultChecked /></span>
              </li>

            </ul>

            <div className="maintenance add-margin full-width">
              <img src={Maintenance} alt="Maintenance" />
              <h2>Maintenance mode</h2>
              <div>
                <span className='df'><EngineeringIcon /> Allow Maintenance</span>
                <span><Switch /></span>
              </div>
              <p>Once you allow maintenance mode users cannot see any products or explore any page in your website</p>
            </div>

            <div className="save add-margin">
              <Button size={"small"} onClick={handleClick} on variant="contained"><SaveIcon /> Save Changes</Button>
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Website settings saved successfully!"
              />
            </div>

          </div>

        </div>

      </div>

    </div>
  );

};

export default Settings;