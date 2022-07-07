import React from 'react'

import FeedbackIcon from '@mui/icons-material/Feedback';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import SmartButtonIcon from '@mui/icons-material/SmartButton';
import MemoryIcon from '@mui/icons-material/Memory';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import ForwardIcon from '@mui/icons-material/Forward';
import TableRowsIcon from '@mui/icons-material/TableRows';
import InsertChartIcon from '@mui/icons-material/InsertChart';

import { routes } from './routes';

export const componentsList = [
  {
    id: 1,
    title: 'Alerts',
    icon: <FeedbackIcon />,
    url: routes.components.alerts
  },
  {
    id: 2,
    title: 'Boxes',
    icon: <AllInboxIcon />,
    url: routes.components.box
  },
  {
    id: 3,
    title: 'Buttons',
    icon: <SmartButtonIcon />,
    url: routes.components.buttons
  },
  {
    id: 4,
    title: 'Charts',
    icon: <InsertChartIcon />,
    url: routes.components.charts.main
  },
  {
    id: 11,
    title: 'Chips',
    icon: <MemoryIcon />,
    url: routes.components.chips
  },
  {
    id: 5,
    title: 'Grid',
    icon: <Grid4x4Icon />,
    url: routes.components.grid
  },
  {
    id: 9,
    title: 'Form',
    icon: <ForwardIcon />,
    url: routes.components.form
  },
  {
    id: 10,
    title: 'Tables',
    icon: <TableRowsIcon />,
    url: routes.components.tables
  },

];