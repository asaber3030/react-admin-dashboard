import './sidebar.scss';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealingIcon from '@mui/icons-material/Healing';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link, NavLink } from 'react-router-dom';

import {componentsList} from '../../data/components';

import Logo from '../../assets/imgs/logo.png';

import { routes } from '../../data/routes';
import {useState} from "react";

const Sidebar = ({ setTheme }) => {

  const [currentTheme, isChanged] = useState(false);

  const handleThemeLight = () => {
    localStorage.setItem('theme', 'light');
    setTheme(localStorage.getItem('theme'));
  }
  const handleThemeDark = () => {
    localStorage.setItem('theme', 'dark');
    setTheme(localStorage.getItem('theme'));
  }

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to='/'><img src={ Logo } className='logo' alt="Logo"/></Link>
      </div>

      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li key={Math.random()}><NavLink to={routes.home}><DashboardIcon /> Dashboard</NavLink></li>

          <p className="title">Lists</p>
          <li key={Math.random()}><NavLink to={routes.users.main}><PersonIcon /> Users</NavLink></li>
          <li key={Math.random()}><NavLink to={routes.products.main}><InventoryIcon /> Products</NavLink></li>
          <li key={Math.random()}><NavLink to={routes.orders.main}><StarBorderPurple500Icon /> Orders</NavLink></li>
          <li key={Math.random()}> <NavLink to={routes.deliveryMen.main}><DeliveryDiningIcon /> Delivery</NavLink></li>

          <p className="title">Components</p>
          {
            componentsList.map((com) => {
              return (
                <>
                  <li key={com.id}><NavLink to={com.url}>{com.icon} {com.title}</NavLink></li>
                </>
              );
            })
          }


          <p className="title">Services</p>
          <li key={Math.random()}><NavLink to={routes.logs}><VpnKeyIcon /> Logs</NavLink></li>
          <li key={Math.random()}><NavLink to={routes.notifications}><NotificationsIcon /> Notifications</NavLink></li>
          <li key={Math.random()}><NavLink to={routes.settings.main}><SettingsIcon /> Settings</NavLink></li>

          <p className="title">User</p>
          <li key={Math.random()}><NavLink to={routes.profile}><ManageAccountsIcon /> Profile</NavLink></li>
          <li key={Math.random()}><NavLink to='logout'><LogoutIcon /> Logout</NavLink></li>
        </ul>
      </div>
      <div className="bottom">
        <div key={Math.random()} onClick={handleThemeLight} className="color-option"></div>
        <div key={Math.random()} onClick={handleThemeDark} className="color-option"></div>
      </div>
    </div>
  );
}

export default Sidebar