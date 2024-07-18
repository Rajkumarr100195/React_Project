import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import {Stack,Button,Box} from '@mui/material';
import { Select } from '@mui/base/Select';
import { Option } from '@mui/base/Option';
import { TextareaAutosize } from '@mui/base';
import { styled } from '@mui/system';
function Footer() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        alert(new URLSearchParams(formData).toString());
      };


            const [select, setSelect] = useState("");
            const [startDate, setStartDate] = useState(new Date());
            const optionchanged = (e) => {
            setSelect(e.target.value);
            };
            const questions = [
            {
            options: ["select", "USA", "UK", "Australia", "India"]
            },
            ];
            return (
            <div className="w-50 p-3 mx-auto" style={visitcon.container}>

             <h1 className="mb-3 text-center" >Add Visitor</h1>


<form onSubmit={handleSubmit}>


<Stack>


  <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />
  <Button variant="contained">Submit</Button>
  </Stack>
</form>




            

           

            </div>
            );
}

export default Footer;


const visitcon = {
  container: {
    position: "relative",
    width: "calc(100% - 220px)",
    flexgrow: "1px",
    padding: "0 0 2rem 1.5rem",
    paddingright: '4px',
    overflowx: 'hidden',
    paddingTop:'10px'

  },
 
};