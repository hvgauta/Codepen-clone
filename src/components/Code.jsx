import React, { useContext } from 'react'
import Editer from './Editer'
import { Box,styled } from '@mui/material';
import {DataContext} from '../Context/DataProvider';

const Container=styled(Box)`
display:flex;
background-color: #060606;
height: 63vh;
`

function Code() {

  const {html,setHtml,css,setCss,js,setJs} = useContext(DataContext);

  return (
    <Container>
    <Editer heading="Html" icon="/" color="red" 
    value={html} 
    onChange={setHtml}/>
    <Editer heading="Css" icon="*" color="blue" 
    value={css} 
    onChange={setCss}/>
    <Editer heading="JavaScript" icon="{}" color="yellow" 
    value={js} 
    onChange={setJs}/>
    </Container>
  )
}

export default Code;
//<button class="first">click here</button>
//class="first" .first{color=blue; }
// funtion yes={alert="harsh"} onclick="yes()" console.log("harshvardhan");