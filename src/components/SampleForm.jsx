import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const SampleForm = () => {
    const [inputs, setInputs] = useState([]);
    var[input,setInput] = useState({uname:"" , email:"", phno:""});
    const [showTable, setShowTable] = useState(false);
   
    const inputHandler =(e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]:value});
    }
    const addHandler = () => {
        console.log("Button clicked");
        console.log(input);
        setInputs([...inputs, input]);
        setInput({ uname: '', email: '', phno: '' });
        setShowTable(true);
    }
  return (
    <div style={{margin:'10%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant='h3' style={{alignItems:'center'}}>Welcome to Login page</Typography>
        <br/><br/>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
                <label htmlFor="uname"></label>
                <TextField 
                fullWidth 
                label="Username"
                name="uname" 
                id="uname"
                value={input.uname}
                onChange={inputHandler}
                autoComplete="username"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <label htmlFor="email"></label>
                <TextField 
                fullWidth 
                label="Email"
                name="email" 
                id="email"
                value={input.email}
                onChange={inputHandler}
                autoComplete="email"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <label htmlFor="phno"></label>
                <TextField 
                fullWidth 
                label="Phone Number"
                name="phno" 
                id="phno"
                value={input.phno}
                onChange={inputHandler}
                autoComplete="tel"
                />
            </Grid>
        </Grid>
        <br/><br/>
        <Button variant = "contained" onClick={addHandler}>Submit</Button>

        {showTable && (
        <>
          <br />
          <br />
          {/* Table section */}
          <table style={{ width: '100%', borderCollapse: 'collapse', }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '5px' }}>Username</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>Email</th>
                <th style={{ border: '1px solid black', padding: '5px' }}>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {inputs.map((item, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{item.uname}</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{item.email}</td>
                  <td style={{ border: '1px solid black', padding: '5px' }}>{item.phno}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  )
}

export default SampleForm