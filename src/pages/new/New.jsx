import React, {useState} from 'react';

import './new.scss';

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import { FileOpenOutlined, Add } from "@mui/icons-material";
import CloseIcon from '@mui/icons-material/Close';

import Button from "@mui/material/Button";
import { MenuItem, TextField } from "@mui/material";

const New = ({ data, title, buttonSubmitTitle, setTheme }) => {

  const [file, setFile] = useState("")
  const [isUploaded, setUploadStatus] = useState(false)

  const removeImage = () => {
    setFile("")
    setUploadStatus(false)
  }

  const fileInputs = data.filter(input => input.type == 'file');
  const selectInputs = data.filter(input => input.type == 'select');
  const textInputs = data.filter(input => input.type == 'text' || input.type == 'password' || input.type == 'email' || input.type == 'number');

  return (

    <div className="new-page">

      <Sidebar setTheme={setTheme} />

      <div className="new-container">

        <Navbar setTheme={setTheme} />

        <div className="top">
          <h1>{ title }</h1>
        </div>

        <div className="bottom">

          <div className="left">

            {
              fileInputs.map((input) => {
                return (
                  <div className='form-input form-input-file' key={input.id}>
                    <div>
                      <label><FileOpenOutlined /> {input.label}</label>
                      <input onChange={(e) => {
                        setFile(e.target.files[0])
                        setUploadStatus(true)
                      } } type={input.type} placeholder={input.placeholder} />
                    </div>
                  </div>
                );
              })
            }

            {
              textInputs.map((input) => {
                return (
                  <div className="form-input" key={input.id}>
                    <TextField size="small" helperText={input.helperText} id={'in-id-' + input.id} label={input.label} variant="outlined" />
                  </div>
                );
              })
            }

            {
              selectInputs.map((input) => {
                return (
                  <div className='form-input'>

                    <TextField
                      id={'in-id-' + input.id}
                      select
                      size="small"
                      label={input.label}
                      helperText="Please select product category"
                    >
                      {input.options.map((option) => (
                        <MenuItem key={option.oID} value={option.value}>
                          {option.value}
                        </MenuItem>
                      ))}
                    </TextField>

                  </div>
                );
              })
            }

            <Button variant='outlined'><Add /> { buttonSubmitTitle }</Button>

          </div>

          <div className="right">
            <div>
              <img src={ file ? URL.createObjectURL(file) : "https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-camera-icon-vector-illustration-in-line-style-for-any-purpose-png-image_989668.jpg" } alt=""/>
              { isUploaded ? (<Button onClick={removeImage} variant='contained' color='error'><CloseIcon /> Close</Button>) : <div></div> }
            </div>
          </div>

        </div>

      </div>

    </div>
  );

};

export default New;