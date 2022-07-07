import React from 'react';
import './profile.scss';

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import DnsIcon from '@mui/icons-material/Dns';
import SettingsIcon from '@mui/icons-material/Settings';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LockClockIcon from '@mui/icons-material/LockClock';

import Button from '@mui/material/Button';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import myLogo from '../../assets/imgs/logo.png';

const Profile = ({setTheme}) => {
  return (
    <div className="main-container">
      <Sidebar setTheme={setTheme} />
      <div className="page-container">
        <Navbar setTheme={setTheme} />
        <div className="profile-container">
          <div className="left-part">

            <div className="top-content">
              <img src={myLogo} alt="My logo"/>
              <h3>Abdulrahman Saber</h3>
              <h5>@asaber.3030</h5>
              <div className="social-media">
                <a href="#" className='facebook-icon'><FacebookIcon /></a>
                <a href="#" className='instagram-icon'><InstagramIcon /></a>
                <a href="#" className='linkedin-icon'><LinkedInIcon /></a>
                <a href="#" className='gitHub-icon'><GitHubIcon /></a>
                <a href="#" className='twitter-icon'><TwitterIcon /></a>
              </div>
            </div>

            <div className="contact-information">
              <h3>Contact Information</h3>
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

            <div className="rating">
              <h3>Rating as Authorized Admin</h3>
              <div className="stars">
                <div className="full"><StarIcon /></div>
                <div className="full"><StarIcon /></div>
                <div className="full"><StarIcon /></div>
                <div className="full"><StarHalfIcon /></div>
                <div className="full"><StarBorderIcon /></div>
              </div>
            </div>

          </div>

          <div className="right-part">
            <ul className='profile-links'>
              <li><a href="#"><AccountCircleIcon /> Profile</a></li>
              <li><a href="#"><AddAPhotoIcon /> Change Picture</a></li>
              <li><a href="#"><EnhancedEncryptionIcon /> Change Password</a></li>
              <li><a href="#"><DnsIcon /> Change Personal Information</a></li>
              <li><a href="#"><SettingsIcon /> My Settings</a></li>
            </ul>

            <div className="sections">
              <div className="stats">

                <div className="stat">
                  <CircularProgressbar value={80} text={"80%"} strokeWidth={3} styles={buildStyles({
                    pathColor: `#7451f8`,
                    textColor: '#000000',
                    trailColor: '#d89de5',
                    backgroundColor: '#9e2ed3',
                  })} />
                  <h4 className='text'>&euro; 98,124,111 Million Euro</h4>
                  <h2 className='title'>Earnings</h2>
                  <div className="actions">
                    <Button variant='outlined' size='small' className='btn btn-info'>Check out</Button>
                    <Button variant='outlined' size='small' className='btn btn-info'>Details</Button>
                  </div>
                </div>

                <div className="stat">
                  <CheckIcon />
                  <h4 className='text'>22,250 order</h4>
                  <h2 className='title'>Completed Orders</h2>
                  <div className="actions">
                    <Button variant='outlined' size='small' className='btn btn-info'>See</Button>
                    <Button variant='outlined' size='small' className='btn btn-info'>Details</Button>
                  </div>
                </div>

                <div className="stat">
                  <CloseIcon />
                  <h4 className='text'>1,250 report</h4>
                  <h2 className='title'>Reports</h2>
                  <div className="actions">
                    <Button variant='outlined' size='small' className='btn btn-info'>Show all</Button>
                    <Button variant='outlined' size='small' className='btn btn-info'>Details</Button>
                  </div>
                </div>

                <div className="stat">
                  <ShoppingCartIcon />
                  <h4 className='text'>10,000 added product by me</h4>
                  <h2 className='title'>Products</h2>
                  <div className="actions">
                    <Button variant='outlined' size='small' className='btn btn-info'>Show all</Button>
                    <Button variant='outlined' size='small' className='btn btn-info'>Details</Button>
                  </div>
                </div>

                <div className="stat">
                  <DeliveryDiningIcon />
                  <h4 className='text'>25 delivery man under my work</h4>
                  <h2 className='title'>Delivery man</h2>
                  <div className="actions">
                    <Button variant='outlined' size='small' className='btn btn-info'>Show all</Button>
                    <Button variant='outlined' size='small' className='btn btn-info'>Details</Button>
                  </div>
                </div>

                <div className="stat">
                  <LockClockIcon />
                  <h4 className='text'>24 day and 18hrs spent on dashboard</h4>
                  <h2 className='title'>Hours spent</h2>
                  <div className="actions">
                    <Button variant='outlined' size='small' className='btn btn-info'>Contributions</Button>
                    <Button variant='outlined' size='small' className='btn btn-info'>Details</Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Profile;