import React from 'react'
import Typography from "@mui/material/Typography";
import "./App.css"
export default function Comments() {
  return (
    <div className='commment-box'> 
     <Typography variant="h4" align="center" className="title">
        {" "}
        Comments
      </Typography>
        <form id='form'>
        <textarea rows="5" cols="100">

        </textarea>
        <input type="submit" value="Submit" className='submit'/>
        </form>
    </div>
  )
}
