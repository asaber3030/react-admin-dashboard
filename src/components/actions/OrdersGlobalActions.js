import React from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";

import { Link } from "react-router-dom";

const OrdersGlobalActions = () => {
  return (
    <div className="globalActions">
      <div className="actions">
        <Button variant='outlined' size='small' color='error'><DeleteIcon /> Delete</Button>
        <Button variant='outlined' size='small' color='success'><RestoreFromTrashIcon /> Restore</Button>
        <Button variant='outlined' size='small' color='primary'><CheckIcon /> Approve</Button>
      </div>
    </div>
  );
}

export default OrdersGlobalActions;