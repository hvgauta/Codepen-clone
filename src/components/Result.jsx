import { Box,styled } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from '../Context/DataProvider'
import React from 'react'

const Result=()=> {

    const Container=styled(Box)`
    height:41vh
    `
    

    const {html,css,js} = useContext(DataContext);

    const srcCode=`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <Script>${js}</Script>
    </html>
    `

  return (
   <Container>
    <iframe
    srcDoc={srcCode}
    title='Output'
    sandbox='allow-scripts'
    frameBorder={0}
    width="100%"
    height="100%"
    />
   </Container>
  )
}

export default Result
