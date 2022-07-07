import React from "react";
import { Link } from 'react-router-dom';

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from '@mui/icons-material/Add';

const WorkersGlobalActions = () => {
  return (
    <div className="globalActions">
      <div className="actions">
        <Link to='/users/new'>
          <Button id='blacked' variant='outlined' size='small' color='inherit'><AddIcon /> New Worker</Button>
        </Link>
          <Button variant='outlined' size='small' color='error'><DeleteIcon /> Delete</Button>
        <Button variant='outlined' size='small' color='success'><RestoreFromTrashIcon /> Restore</Button>
        <Button variant='outlined' size='small' color='primary'><CheckIcon /> Approve</Button>
      </div>
    </div>
  );
}
export default WorkersGlobalActions;