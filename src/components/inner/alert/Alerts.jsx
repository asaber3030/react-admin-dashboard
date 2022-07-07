import React, {useState} from "react";

import './alerts.scss';
import Sidebar from "../../sidebar/Sidebar";

import Navbar from "../../navbar/Navbar";

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

import FeedbackIcon from '@mui/icons-material/Feedback';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Alerts = ({ setTheme }) => {
  const [open, setOpen] = React.useState(true);

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme} />

      <div className="page-container">

        <Navbar setTheme={setTheme} />

        <div className="alerts-container">

          <h1><FeedbackIcon size='large' /> Alerts Component</h1>

          <div className="alerts-show-combo">

            <div className="alerts-show">
              <h2 className='basic-title'> Basic Alerts</h2>
              <p>Some description of this alert goes here</p>
              <Stack sx={{width: '100%'}} spacing={2}>
                <Alert severity="error">This is an error alert — check it out!</Alert>
                <Alert severity="warning">This is a warning alert — check it out!</Alert>
                <Alert severity="info">This is an info alert — check it out!</Alert>
                <Alert severity="success">This is a success alert — check it out!</Alert>
              </Stack>
            </div>

            <div className="alerts-show">
              <h2 className='basic-title'> Alerts with description</h2>
              <p>Some description of this alert goes here</p>
              <Stack sx={{width: '100%'}} spacing={2}>
                <Alert severity="error">
                  <AlertTitle>Error</AlertTitle>
                  This is an error alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="warning">
                  <AlertTitle>Warning</AlertTitle>
                  This is a warning alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  This is an info alert — <strong>check it out!</strong>
                </Alert>
                <Alert severity="success">
                  <AlertTitle>Success</AlertTitle>
                  This is a success alert — <strong>check it out!</strong>
                </Alert>
              </Stack>

            </div>

            <div className="alerts-show">
              <h2 className='basic-title'> Alerts with Actions</h2>
              <p>Some description of this alert goes here</p>
              <Stack sx={{width: '100%'}} spacing={2}>
                <Alert onClose={() => {
                }}>This is a success alert — check it out!</Alert>
                <Alert severity='error' action={<Button color="inherit" size="small">UNDO</Button>}>
                  This is a danger alert — check it out!
                </Alert>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit"/>
                    </IconButton>
                  }
                  sx={{mb: 2}}
                >
                  Close me!
                </Alert>
              </Stack>

            </div>

            <div className="alerts-show">
              <h2 className="basic-title">Filled Alerts</h2>
              <p>Some description of this alert goes here</p>
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="error">
                  This is an error alert — check it out!
                </Alert>
                <Alert variant="filled" severity="warning">
                  This is a warning alert — check it out!
                </Alert>
                <Alert variant="filled" severity="info">
                  This is an info alert — check it out!
                </Alert>
                <Alert variant="filled" severity="success">
                  This is a success alert — check it out!
                </Alert>
              </Stack>

            </div>

            <div className="alerts-show fullwidth">
              <h2 className="basic-title">Outlined Alerts</h2>
              <p>Some description of this alert goes here</p>
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="outlined" severity="error">
                  This is an error alert — check it out!
                </Alert>
                <Alert variant="outlined" severity="warning">
                  This is a warning alert — check it out!
                </Alert>
                <Alert variant="outlined" severity="info">
                  This is an info alert — check it out!
                </Alert>
                <Alert variant="outlined" severity="success">
                  This is a success alert — check it out!
                </Alert>
              </Stack>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Alerts;