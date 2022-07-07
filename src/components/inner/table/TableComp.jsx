import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import './table.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";

import TagIcon from '@mui/icons-material/Tag';
import GridViewIcon from '@mui/icons-material/GridView';


import CodeHigh from '../../CodeHigh';

const TableComp = ({setTheme}) => {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme}/>

      <div className="page-container">

        <Navbar setTheme={setTheme}/>

        <div className="table-container">

          <h1 className='title'><GridViewIcon /> Table Component</h1>

          <div className="content">

            <div className="left-content">

              <div className="table-collection">
                <h3><TagIcon /> Basic Table</h3>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell>Calories</TableCell>
                        <TableCell>Fat&nbsp;(g)</TableCell>
                        <TableCell>Carbs&nbsp;(g)</TableCell>
                        <TableCell>Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Arch</TableCell>
                        <TableCell>51g</TableCell>
                        <TableCell>101g</TableCell>
                        <TableCell>320g</TableCell>
                        <TableCell>11g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Chocolate</TableCell>
                        <TableCell>158g</TableCell>
                        <TableCell>150g</TableCell>
                        <TableCell>999g</TableCell>
                        <TableCell>152g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ice Cream</TableCell>
                        <TableCell>51g</TableCell>
                        <TableCell>101g</TableCell>
                        <TableCell>320g</TableCell>
                        <TableCell>159g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Peanut Butter</TableCell>
                        <TableCell>80g</TableCell>
                        <TableCell>99g</TableCell>
                        <TableCell>75g</TableCell>
                        <TableCell>23g</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>

              <div className="table-collection">
                <h3><TagIcon /> Data Table</h3>
                <div style={{ height: 400, width: '100%' }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                  />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TableComp;