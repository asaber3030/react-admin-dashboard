
import myLogo from '../../assets/imgs/logo.png';

import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import PersonIcon from '@mui/icons-material/Person';
import LockResetIcon from '@mui/icons-material/LockReset';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {NavLink, Link} from "react-router-dom";
import {routes} from "../../data/routes";

const SettingsSidebar = () => {
  return (
    <div className="settings-sidebar">
      <div className="top-part">
        <div className="img">
          <img src={myLogo} alt="My Logo" />
        </div>
        <div className="text">
          <h3>Abdulrahman Saber</h3>
          <h6>@asaber.3030</h6>
        </div>
      </div>
      <ul className='links'>
        <li><Link to={routes.settings.main}><OpenInBrowserIcon /> Website Settings</Link></li>
        <li><NavLink to={routes.settings.account}><PersonIcon /> Account Settings</NavLink></li>
        <li><NavLink to={routes.settings.password}><LockResetIcon /> Change Password</NavLink></li>
        <li><NavLink to={routes.settings.email}><EmailIcon /> E-mail Addresses</NavLink></li>
        <li><NavLink to={routes.settings.phone}><PhoneIphoneIcon /> Phone Number</NavLink></li>
        <li><NavLink to={routes.settings.social}><ConnectWithoutContactIcon /> Social Media Links</NavLink></li>
        <li><NavLink to={routes.settings.picture}><AddAPhotoIcon /> Profile picture</NavLink></li>
        <li className='add-sep'><NavLink to={routes.settings.personal}><DataObjectIcon /> Personal Information</NavLink></li>
        <li><NavLink to={routes.settings.themes}><DarkModeIcon /> Themes</NavLink></li>
        <li><a to={routes.settings.main}><ShoppingCartCheckoutIcon /> Products settings</a></li>
        <li><a to={routes.settings.main}><ShoppingBagIcon /> Orders</a></li>
        <li><a to={routes.settings.main}><PeopleAltIcon /> Users</a></li>

      </ul>
    </div>

  );
};

export default SettingsSidebar;