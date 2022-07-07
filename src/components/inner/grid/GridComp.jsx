import React, {useState} from "react";
import {Link} from 'react-router-dom';

import Prism from 'prismjs';

import './grid.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import GridViewIcon from '@mui/icons-material/GridView';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import CodeHigh from '../../CodeHigh';

const GridComp = () => {

  const gridSysCode1 = `<Grid container spacing={int}>
  <Grid item xs={int} md={int}><Item>Content</Item></Grid>
</Grid>`;

  const gridSysCode2 = `<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={int} md={int}><Item>Content</Item></Grid>
</Grid>`;

  const gridSysCode3 = `<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>`;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="main-container">

      <Sidebar />

      <div className="page-container">

        <Navbar />

        <div className="grid-container">

          <h1><GridViewIcon size='large' /> Grid System</h1>

          <div className="grid-collection">
            <h3 className='grid-title'>Simple Grid</h3>
            <Box sx={{ width: '100%' }}>
              <Grid container spacing={3} rowSpacing={1}>
                <Grid item xs={6} lg={6}>
                  <Item className='color-red grid-item-'>1</Item>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <Item className='color-blue grid-item-'>2</Item>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <Item className='color-green grid-item-'>3</Item>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <Item className='color-orange grid-item-'>4</Item>
                </Grid>
              </Grid>
            </Box>
            <CodeHigh code={gridSysCode1} language="typescript" />

          </div>

          <div className="grid-collection">
            <h3 className='grid-title'>Customization</h3>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} lg={6}>
                  <Item className='color-red grid-item-'>1</Item>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <Item className='color-blue grid-item-'>2</Item>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <Item className='color-green grid-item-'>3</Item>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <Item className='color-orange grid-item-'>4</Item>
                </Grid>
              </Grid>
            </Box>
            <CodeHigh code={gridSysCode2} language="typescript" />
          </div>

          <div className="grid-collection">
            <h3 className='grid-title'>Editing Flexbox</h3>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} lg={6}>
                  <Item className='color-red grid-item-'>1</Item>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <Item className='color-blue grid-item-'>2</Item>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <Item className='color-green grid-item-'>3</Item>
                </Grid>
                <Grid item xs={6} lg={6}>
                  <Item className='color-orange grid-item-'>4</Item>
                </Grid>
              </Grid>
            </Box>
            <CodeHigh code={gridSysCode3} language="typescript" />
          </div>

        </div>

      </div>

    </div>
  );
}

export default GridComp;