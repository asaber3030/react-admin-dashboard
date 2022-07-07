import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Prism from 'prismjs';
import './form.scss';

import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import CodeHigh from '../../CodeHigh';

import InputIcon from '@mui/icons-material/Input';
import TagIcon from '@mui/icons-material/Tag';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const GridComp = ({setTheme}) => {

  const codeInput = `
import TextField from '@mui/material/TextField';
<TextField {...props} />
  `;

  const [currency, setCurrency] = React.useState('EUR');
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];

  return (
    <div className="main-container">

      <Sidebar setTheme={setTheme}/>

      <div className="page-container">

        <Navbar setTheme={setTheme}/>

        <div className="form-container">

          <div className="left-content">

            <h1><InputIcon /> Form Component</h1>

            <div className="inputs-collection">

              <h2><TagIcon /> Basic Fields</h2>
              <p>The <code className='custom-code'>TextField</code> wrapper component is a complete form control including a label, input, and help text. It comes with three variants: outlined (default), filled, and standard.</p>

              <div className="inputs-show">
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField id="filled-basic" label="Filled" variant="filled" />
                  <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  <TextField id="standard-basic" label="Standard"  variant="standard" />
                </Box>
              </div>

            </div>

            <div className="inputs-collection">

              <h2><TagIcon /> Form props</h2>
              <p>Standard form attributes are supported e.g. <code className='custom-code'>required</code>, <code className='custom-code'>disabled</code>, <code>type</code>, etc. as well as a <code className='custom-code'>helperText</code> which is used to give context about a field's input, such as how the input will be used.</p>

              <div className="inputs-show">
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className='add-divider'>
                    <TextField
                      required
                      id="outlined-required"
                      label="Required"
                      size='small'
                      defaultValue="Hello World"
                    />
                    <TextField
                      disabled
                      id="outlined-disabled"
                      label="Disabled"
                      defaultValue="Hello World"
                      size='small'
                    />
                    <TextField
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      size='small'
                    />
                    <TextField
                      id="outlined-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                      size='small'
                    />
                    <TextField
                      id="outlined-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      size='small'
                    />
                    <TextField id="outlined-search" label="Search field" type="search" size='small' helperText="Some important text" />

                  </div>
                  <div className='add-divider'>
                    <TextField
                      required
                      id="filled-required"
                      label="Required"
                      defaultValue="Hello World"
                      variant="filled"
                      size='small'
                    />
                    <TextField
                      disabled
                      id="filled-disabled"
                      label="Disabled"
                      defaultValue="Hello World"
                      variant="filled"
                      size='small'
                    />
                    <TextField
                      id="filled-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="filled"
                      size='small'
                    />
                    <TextField
                      id="filled-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="filled"
                      size='small'
                    />
                    <TextField
                      id="filled-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      size='small'
                    />
                    <TextField
                      id="filled-search"
                      label="Search field"
                      type="search"
                      variant="filled"
                      size='small'
                    />

                  </div>
                  <div className='add-divider'>
                    <TextField
                      required
                      id="standard-required"
                      label="Required"
                      defaultValue="Hello World"
                      variant="standard"
                      size='small'
                    />
                    <TextField
                      disabled
                      id="standard-disabled"
                      label="Disabled"
                      defaultValue="Hello World"
                      variant="standard"
                      size='small'
                    />
                    <TextField
                      id="standard-password-input"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      variant="standard"
                      size='small'
                    />
                    <TextField
                      id="standard-read-only-input"
                      label="Read Only"
                      defaultValue="Hello World"
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="standard"
                      size='small'
                    />
                    <TextField
                      id="standard-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="standard"
                      size='small'
                    />
                    <TextField
                      id="standard-search"
                      label="Search field"
                      type="search"
                      variant="standard"
                      size='small'
                    />

                  </div>
                </Box>
              </div>

            </div>

            <div className="inputs-collection">

              <h2><TagIcon /> Select</h2>
              <p>Standard form attributes are supported e.g. <code className='custom-code'>required</code>, <code className='custom-code'>disabled</code>, <code className='custom-code'>type</code>, etc. as well as a <code className='custom-code'>helperText</code> which is used to give context about a field's input, such as how the input will be used.</p>

              <div className="inputs-show">
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Select"
                      value={currency}
                      onChange={handleChange}
                      helperText="Please select your currency"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      label="Native select"
                      value={currency}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                      helperText="Please select your currency"
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="filled-select-currency"
                      select
                      label="Select"
                      value={currency}
                      onChange={handleChange}
                      helperText="Please select your currency"
                      variant="filled"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="filled-select-currency-native"
                      select
                      label="Native select"
                      value={currency}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                      helperText="Please select your currency"
                      variant="filled"
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div>
                    <TextField
                      id="standard-select-currency"
                      select
                      label="Select"
                      value={currency}
                      onChange={handleChange}
                      helperText="Please select your currency"
                      variant="standard"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      id="standard-select-currency-native"
                      select
                      label="Native select"
                      value={currency}
                      onChange={handleChange}
                      SelectProps={{
                        native: true,
                      }}
                      helperText="Please select your currency"
                      variant="standard"
                    >
                      {currencies.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </TextField>
                  </div>
                </Box>
              </div>

            </div>

          </div>

          <div className="right-content">

            <h1>Properties of <span>{`<TextField {...props} />`}</span></h1>

            <div className="code-highlight">
              <CodeHigh code={codeInput} language="typescript" />
            </div>

            <div className="display-prop">
              <div className="prop">
                <h5>Prop: <code className='custom-code'>required</code>, <span className='add-red'>none</span></h5>
              </div>

              <div className="prop">
                <h5>Prop: <code className='custom-code'>disabled</code>, <span className='add-red'>none</span></h5>
              </div>

              <div className="prop">
                <h5>Prop: <code className='custom-code'>label</code>, <span className='add-red'>string, integer</span></h5>
              </div>

              <div className="prop">
                <h5>Prop: <code className='custom-code'>defaultValue</code>, <span className='add-red'>string, integer</span></h5>
              </div>

              <div className="prop">
                <h5>Prop: <code className='custom-code'>helperText</code>, <span className='add-red'>string, integer</span></h5>
              </div>

              <div className="prop">
                <h5>Prop: <code className='custom-code'>variant</code>, <span className='add-red'>string</span></h5>
                <h5>Accepts: <code className='custom-code'>filled, standard</code></h5>
              </div>

              <div className="prop">
                <h5>Prop: <code className='custom-code'>InputProps</code>, <span className='add-red'>object</span></h5>
                <h5>Accepts: <code className='custom-code'>{ `{ readOnly: true }` }</code></h5>
              </div>

              <div className="prop">
                <h5>Prop: <code className='custom-code'>color</code>, <span className='add-red'>string</span></h5>
                <h5>Accepts: <code className='custom-code'>warning</code>, <code className='custom-code'>error</code>, <code className='custom-code'>secondary</code>, <code className='custom-code'>success</code></h5>
              </div>

            </div>

            <h1>Properties of <span>{`<Box {...props}>`}</span></h1>

            <div className="code-highlight">
              <CodeHigh code={codeInput} language="typescript" />
            </div>

            <div className="display-prop">
              <div className="prop">
                <h5>Prop: <code className='custom-code'>component</code>, <span className='add-red'>string</span></h5>
                <h5>Accepts: <code className='custom-code'>"Form"</code></h5>
              </div>

              <div className="prop">
                <h5>Prop: <code className='custom-code'>noValidate</code>, <span className='add-red'>none</span></h5>
              </div>

              <div className="prop">
                <h5>Prop: <code className='custom-code'>autoComplete</code>, <span className='add-red'>string</span></h5>
                <h5>Accepts: <code className='custom-code'>"off"</code>, <code className='custom-code'>"on"</code></h5>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default GridComp;