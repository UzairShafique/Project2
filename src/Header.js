 
 import React from 'react'
 import AppBar from '@material-ui/core/AppBar'
import { Typography } from '@material-ui/core'
import "./header.css"
 
 function Header() {
     return (
         <div className="root">
             <AppBar position="static">
                 <Typography variant="h5" className="title">COVID 19 APP TRACKER</Typography>
             </AppBar>

         </div>
     )
 }
 
 export default Header
 