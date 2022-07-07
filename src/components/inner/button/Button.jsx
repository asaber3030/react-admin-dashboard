import React, {useState} from "react";
import {Link} from 'react-router-dom';

import './button.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import MouseIcon from '@mui/icons-material/Mouse';
import Button from "@mui/material/Button";

import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Alerts = ({ setTheme }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme}/>

      <div className="page-container">

        <Navbar setTheme={setTheme}/>

        <div className="buttons-container">

          <div className="collections">

            <h1><MouseIcon size='large' /> Buttons Component</h1>

            <div className="buttons-collection">
              <h1 className='title'>Custom Buttons</h1>
              <div className='collection d-flex'>
                <button className='btn-custom btn-secondary'><PersonIcon /> Custom secondary</button>
                <button className='btn-custom btn-warning'><CheckIcon /> Custom warning</button>
                <button className='btn-custom btn-error'><PersonIcon /> Custom error</button>
                <button className='btn-custom btn-info'><CheckIcon /> Custom info</button>
                <button className='btn-custom btn-primary'><PersonIcon /> Custom primary</button>
                <button className='btn-custom btn-success'><CheckIcon /> Custom success</button>
              </div>
            </div>

            <div className="buttons-collection">
              <h1 className='title'>Rounded Buttons</h1>
              <div className='collection d-flex'>
                <button className='btn-custom round btn-secondary'><PersonIcon /> Custom secondary</button>
                <button className='btn-custom round btn-warning'><CheckIcon /> Custom warning</button>
                <button className='btn-custom round btn-error'><PersonIcon /> Custom error</button>
                <button className='btn-custom round btn-info'><CheckIcon /> Custom info</button>
                <button className='btn-custom round btn-primary'><PersonIcon /> Custom primary</button>
                <button className='btn-custom round btn-success'><CheckIcon /> Custom success</button>
              </div>
            </div>

            <div className="buttons-collection">
              <h1 className='title'>Material Buttons</h1>
              <div className='collection'>
                <Button variant='contained' color='secondary'>contained secondary</Button>
                <Button variant='contained' color='warning'>contained warning</Button>
                <Button variant='contained' color='error'>contained error</Button>
                <Button variant='contained' color='info'>contained info</Button>
                <Button variant='contained' color='primary'>contained primary</Button>
                <Button variant='contained' color='success'>contained success</Button>
              </div>
            </div>

            <div className="buttons-collection">
              <h1 className='title'>Outlined Buttons</h1>
              <div className='collection'>
                <Button variant='outlined' color='secondary'>Outlined secondary</Button>
                <Button variant='outlined' color='warning'>Outlined warning</Button>
                <Button variant='outlined' color='error'>Outlined error</Button>
                <Button variant='outlined' color='info'>Outlined info</Button>
                <Button variant='outlined' color='primary'>Outlined primary</Button>
                <Button variant='outlined' color='success'>Outlined success</Button>
              </div>
            </div>

            <div className="buttons-collection">
              <h1 className='title'>Icons Buttons</h1>
              <div className='collection'>
                <Button variant='outlined' color='secondary'><PersonIcon /> Outlined secondary</Button>
                <Button variant='contained' color='warning'><CheckIcon /> contained warning</Button>
                <Button variant='outlined' color='error'><PersonIcon /> Outlined error</Button>
                <Button variant='contained' color='info'><CheckIcon /> contained info</Button>
                <Button variant='outlined' color='primary'><PersonIcon /> Outlined primary</Button>
                <Button variant='contained' color='success'><CheckIcon /> contained success</Button>
              </div>
            </div>

          </div>

          <div className="list">
            <h1>List of buttons components</h1>
            <ul>
              <li><CheckBoxIcon /> Material buttons</li>
              <li><CheckBoxIcon /> Outlined buttons</li>
              <li><CheckBoxIcon /> Icons in buttons</li>
              <li><CheckBoxIcon /> Custom buttons</li>
              <li><CheckBoxIcon /> Rounded Custom buttons</li>
            </ul>

            <h1>Other Related Components</h1>
            <ul>
              <li><Link to="/components/alerts">Alerts</Link></li>
              <li><Link to="/components/box">Boxes</Link></li>
              <li><Link to="/components/charts">Charts</Link></li>
              <li><Link to="/components/chips">Chip</Link></li>
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Alerts;