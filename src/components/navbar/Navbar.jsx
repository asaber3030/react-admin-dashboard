import * as React from 'react';
import './navbar.scss';
import {
  SearchOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  DarkMode,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutline,
  ListOutlined, MessageOutlined, PersonOutline, PersonOutlined, MoreHoriz
} from "@mui/icons-material";

import Avatar from '@mui/material/Avatar';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

import Me from '../../assets/imgs/me.jpg';

import {useEffect, useState} from "react";

const Navbar = ({ setTheme }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [anchorEl3, setAnchorEl3] = useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const handleTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light')
    }
  }

  const darkSx = {
    backgroundColor: '#222',
    overflow: 'visible',
    boxShadow: '0 2px 4px #000 !important',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&.MuiMenuItem-root': {
      color: "#FFF !important",
      "&:hover": { backgroundColor: "red !important" }
    },
    '&:before': {
      display: 'none',
    },
  }

  const lightSx = {
    backgroundColor: '#fff',
    overflow: 'visible',
    mt: 1.5,
    '& .MuiAvatar-root': {
      boxShadow: "none",
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&.MuiMenuItem-root': {
      color: "#FFF !important"
    },
    '&:before': {
      content: '""',
      display: 'none',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  }

  const darkTitleNotification = {
    color: "#FFF",
    borderBottomColor: "#444"
  }

  const lightTitleNotification = {
    color: "#000",
    borderBottomColor: "#ddd"
  }

  return (
    <nav className='navbar'>

      <div className="wrapper">

        <div className="search">
          <input type="text" placeholder='Keywords '/>
          <SearchOutlined />
        </div>

        <div className="items">
          <div className="item lang-item">
            <Tooltip title="Choose your language">
              <span
                onClick={handleClick2}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open2 ? 'account-menu2' : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? 'true' : undefined}
              >
                <LanguageOutlined /> Language
              </span>
            </Tooltip>
            <Menu
              anchorEl={anchorEl2}
              id="account-menu2"
              open={open2}
              onClose={handleClose2}
              onClick={handleClose2}
              PaperProps={{
                elevation: 0,
                sx: localStorage.getItem('theme') === "dark" ? darkSx : lightSx,
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'left' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

              <MenuItem sx={ localStorage.getItem('theme') === "dark" ? { color: "gray" } : { color: "#000" } } className={'selected'}>English (default)</MenuItem>
              <MenuItem sx={ localStorage.getItem('theme') === "dark" ? { color: "gray" } : { color: "#000" } }>Arabic</MenuItem>
              <MenuItem sx={ localStorage.getItem('theme') === "dark" ? { color: "gray" } : { color: "#000" } }>French</MenuItem>
              <MenuItem sx={ localStorage.getItem('theme') === "dark" ? { color: "gray" } : { color: "#000" } }>Chinese</MenuItem>
            </Menu>
          </div>

          <div className="item" onClick={handleTheme}>
            { localStorage.getItem('theme') === 'dark' ? (<DarkMode />) : (<DarkModeOutlined />)  }
          </div>

          <div className="item">
            <FullscreenExitOutlined />
          </div>

          <div className="item notify-item">

            <div className='counter'>1</div>
            <Tooltip title="Notifications">
              <span
                onClick={handleClick3}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open3 ? 'account-menu3' : undefined}
                aria-haspopup="true"
                aria-expanded={open3 ? 'true' : undefined}
              >
                <NotificationsNoneOutlined />
              </span>
            </Tooltip>
            <Menu
              anchorEl={anchorEl3}
              id="account-menu3"
              open={open3}
              onClose={handleClose3}
              onClick={handleClose3}
              PaperProps={{
                elevation: 0,
                sx: localStorage.getItem('theme') === "dark" ? darkSx : lightSx,
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'left' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

              <h2 style={ localStorage.getItem('theme') === 'dark' ? {
                margin: '8px 20px 10px 20px',
                borderBottom: '1px solid #f1f1f1',
                paddingBottom: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                ...darkTitleNotification
              } : {
                margin: '8px 20px 10px 20px',
                borderBottom: '1px solid #f1f1f1',
                paddingBottom: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                ...lightTitleNotification
              }} className='darktitle'>
                Notifications
                <MoreHoriz />
              </h2>

              <div className='item-notification'>
                <div className="left">
                  <img src={Me} alt=""/>
                </div>
                <div className="right">
                  <h3 className='title'>Notification title <span>12:02 PM - Yesterday</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestiae odio omnis. Itaque odio sapiente vero. Aperiam autem, distinctio excepturi fugiat ipsam itaque maxime nemo obcaecati officia quo sed, vel.</p>
                </div>
              </div>

              <div className='item-notification'>
                <div className="left">
                  <img src={Me} alt=""/>
                </div>
                <div className="right">
                  <h3 className='title'>Notification title <span>12:02 PM - Yesterday</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestiae odio omnis. Itaque odio sapiente vero. Aperiam autem, distinctio excepturi fugiat ipsam itaque maxime nemo obcaecati officia quo sed, vel.</p>
                </div>
              </div>

              <div className='item-notification'>
                <div className="left">
                  <img src={Me} alt=""/>
                </div>
                <div className="right">
                  <h3 className='title'>Notification title <span>12:02 PM - Yesterday</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestiae odio omnis. Itaque odio sapiente vero. Aperiam autem, distinctio excepturi fugiat ipsam itaque maxime nemo obcaecati officia quo sed, vel.</p>
                </div>
              </div>

              <div className='item-notification'>
                <div className="left">
                  <img src={Me} alt=""/>
                </div>
                <div className="right">
                  <h3 className='title'>Notification title <span>12:02 PM - Yesterday</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestiae odio omnis. Itaque odio sapiente vero. Aperiam autem, distinctio excepturi fugiat ipsam itaque maxime nemo obcaecati officia quo sed, vel.</p>
                </div>
              </div>

              <div className='item-notification'>
                <div className="left">
                  <img src={Me} alt=""/>
                </div>
                <div className="right">
                  <h3 className='title'>Notification title <span>12:02 PM - Yesterday</span></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestiae odio omnis. Itaque odio sapiente vero. Aperiam autem, distinctio excepturi fugiat ipsam itaque maxime nemo obcaecati officia quo sed, vel.</p>
                </div>
              </div>

            </Menu>
          </div>

          <div className="item">
            <ChatBubbleOutline />
            <div className='counter'>10</div>
          </div>

          <div className="item">
            <Tooltip title="Account">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <img sx={{ width: 32, height: 32 }} src={Me} />
              </IconButton>
            </Tooltip>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: localStorage.getItem('theme') === "dark" ? darkSx : lightSx,
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >

              <MenuItem sx={ localStorage.getItem('theme') === "dark" ? { color: "gray" } : { color: "#000" } }><ListItemIcon><PersonOutlined fontSize="small" /></ListItemIcon>Profile</MenuItem>
              <MenuItem sx={ localStorage.getItem('theme') === "dark" ? { color: "gray" } : { color: "#000" } }><ListItemIcon><MessageOutlined fontSize="small" /></ListItemIcon>Messages</MenuItem>
              <MenuItem sx={ localStorage.getItem('theme') === "dark" ? { color: "gray" } : { color: "#000" } }><ListItemIcon><NotificationsNoneOutlined fontSize="small" /></ListItemIcon>Notifications</MenuItem>
              <Divider />
              <MenuItem sx={ localStorage.getItem('theme') === "dark" ? { color: "gray" } : { color: "#000" } }><ListItemIcon><PersonAdd fontSize="small" /></ListItemIcon>Add another account</MenuItem>
              <Divider />
              <MenuItem sx={ localStorage.getItem('theme') === "dark" ? { color: "gray" } : { color: "#000" } }><ListItemIcon><Settings fontSize="small" /></ListItemIcon>Settings</MenuItem>
              <MenuItem sx={ localStorage.getItem('theme') === "dark" ? { color: "gray" } : { color: "#000" } }><ListItemIcon><Logout fontSize="small" /></ListItemIcon>Logout</MenuItem>
            </Menu>
          </div>

        </div>

      </div>

    </nav>

  );
}

export default Navbar