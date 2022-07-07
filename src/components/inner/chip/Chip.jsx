import React, {useState} from "react";
import {Link} from 'react-router-dom';

import './chip.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import MemoryIcon from '@mui/icons-material/Memory';
import Button from "@mui/material/Button";

import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const Chips = ({setTheme}) => {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme}/>

      <div className="page-container">

        <Navbar setTheme={setTheme}/>

        <div className="chip-container">

          <h1><MemoryIcon size='large' /> Chips Component</h1>

          <div className="chips-collection">
            <h1 className='title'>Default Chip</h1>
            <Stack direction="row" spacing={1}>
              <Chip label="Chip Filled" />
              <Chip label="Chip Outlined" variant="outlined" />
              <Chip label="Clickable" onClick={handleClick} />
              <Chip label="Clickable" variant="outlined" onClick={handleClick} />
              <Chip label="Deletable" color='error' onDelete={handleDelete} />
              <Chip label="Deletable" color='error' variant="outlined" onDelete={handleDelete} />
            </Stack>
          </div>

          <div className="chips-collection">
            <h1 className='title'>Custom Icons</h1>
            <div className='collection d-flex'>
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Custom delete icon"
                  onClick={handleClick}
                  onDelete={handleDelete}
                  deleteIcon={<DoneIcon />}
                  color={'success'}
                />
                <Chip
                  label="Custom delete icon"
                  onClick={handleClick}
                  onDelete={handleDelete}
                  deleteIcon={<DeleteIcon />}
                  variant="outlined"
                  color={'info'}
                />
                <Chip
                  label="Custom delete icon"
                  onClick={handleClick}
                  onDelete={handleDelete}
                  deleteIcon={<DeleteIcon />}
                  color={'error'}
                />

              </Stack>
            </div>
          </div>

          <div className="chips-collection">
            <h1 className='title'>With Avatar</h1>
            <div className='collection'>
              <Stack direction="row" spacing={1}>
                <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                <Chip
                  avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                  label="Avatar"
                  variant="outlined"
                />
                <Chip
                  avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                  label="Avatar"
                  variant="outlined"
                  color={'warning'}
                />
                <Chip
                  avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                  label="Avatar"
                  variant="outlined"
                  color={'success'}
                />
                <Chip
                  avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                  label="Avatar"
                  variant="outlined"
                  color={'error'}
                />
              </Stack>
            </div>
          </div>

          <div className="chips-collection">
            <h1 className='title'>All Colors Buttons</h1>
            <div className='collection'>
              <Stack direction="row" spacing={1}>
                <Chip label="Primary" color="primary" />
                <Chip label="Success" color="success" />
                <Chip label="Warning" color="warning" />
                <Chip label="Error" color="error" />
                <Chip label="Secondary" color="secondary" />
              </Stack>
              <Stack direction="row" spacing={1}>
                <Chip label="Primary" color="primary" variant='outlined' />
                <Chip label="Success" color="success" variant='outlined' />
                <Chip label="Warning" color="warning" variant='outlined' />
                <Chip label="Error" color="error" variant='outlined' />
                <Chip label="Secondary" color="secondary" variant='outlined' />
              </Stack>
            </div>
          </div>

          <div className="chips-collection">
            <h1 className='title'>Badges</h1>
            <div className='collection d-flex'>
              <div className="badge badge-secondary">Notifications <span>40</span></div>
              <div className="badge badge-error">Messages <span>21</span></div>
              <div className="badge badge-success">E-mails <span>1250</span></div>
              <div className="badge badge-primary">Spam <span>8210</span></div>
            </div>
          </div>


        </div>




      </div>

    </div>
  );
}

export default Chips;