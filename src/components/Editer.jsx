import React from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { useState } from 'react';
//package mui material
import { Box,  Typography, Button,styled } from '@mui/material'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
//package react-codemirror2
import { Controlled as ControlledEditor } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

function Editer({heading,icon,color,value,onChange}) {


  const Container = styled(Box)`
  flex-grow:1;
  flex-basic:0;
  display:flex;
  flex-direction:column;
  padding: 0px 8px 8px;`;

    const Heading = styled(Box)`
    background:#1d1e22;
    display:flex;
    padding:9px 12px;
    `;
     
    const Header=styled(Box)`
    display:flex;
    background:#060606;
    color:white;
    justify-content:space-between;
    font-weight:700;
    `
    
  const [open,setOpen]=useState(true);

  const handleChange=(editor,data,value)=>{
    onChange(value);
  }

  return (
    <Container style={open ? null: {flexGrow:0}}>
      <Header>
        <Heading>
            <Box component="span"
            style={{
                background:color,
                height:20,
                width:30,
                display:"flex",
                placeContent:"center",
                borderRadius:5,
                marginRight:5,
                paddingBottom:5,
            }}
            >{icon}</Box>
            {heading}
        </Heading>
        <CloseFullscreenIcon 
        onClick={()=>setOpen(prevState => !prevState)}
        />
      </Header>
      <ControlledEditor 
      className='controlled-editor'
      value={value}
      onBeforeChange={handleChange}
        options={{
          lineWrapping: true,
          lint: true,
          theme: 'material',
          lineNumbers: true
          }}
      />
    </Container>
  )
}

export default Editer
