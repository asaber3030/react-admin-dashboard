import React from 'react';
import './datatable.scss';

import {Link} from 'react-router-dom'

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import DeleteIcon from '@mui/icons-material/Delete';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import CheckIcon from '@mui/icons-material/Check';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { users, userColumns }  from '../../data/data-table-source.js';

export default function DataTable({ cols, actions, data, title, load, globalActions, titleIcon }) {

  return (
    <div className='data-table'>

      <div className="top-data">

        <h1 className="title">{ titleIcon } { title }</h1>

        { globalActions }

      </div>

      <DataGrid
        rows={ data }
        columns={ cols.concat(actions) }
        pageSize={ 10 }
        sx={{
          '.MuiDataGrid-cell': {
            borderBottomColor: localStorage.getItem('theme') === 'dark' ? '#444' : '#ddd'
          },
          '.MuiDataGrid-main': {
            borderBottom: 'none !important'
          },
        }}
        rowsPerPageOptions={ [8] }
        checkboxSelection
      />

      { load }

    </div>
  );
}

