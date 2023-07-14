import { Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./Offers.css";
import Card from "@mui/material/Card";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';

/**
 * @author
 * @function OfferPage
 **/

const OfferPage = (props) => {
  return (
    <>
    <Container>
    <Typography variant="h6" sx={{ color: "#fff", mt: 5, mb: 3 }}>Tracking Link</Typography>
      <Card sx={{ padding: "2rem", backgroundColor: "#2b303b" }}>
        <p style={{ color: "#fff" }}>This is your default tracking link that can be used to promote the offer.</p>
      <FormControl sx={{ m: 1, width: "100%", mt: 4, backgroundColor: "#202530",  borderRadius: "6px", border: "1px solid #4d5863",  }} variant="standard">
          <Input
          sx={{ padding: "1rem !important",color:"#fff !important" }}
          disabled  
          className="affworld-affiliate-link"
          value="Hello"
            endAdornment={
              <InputAdornment position="end">
                <ContentPasteOutlinedIcon sx={{ color: "#fff", "&:hover": { cursor: "pointer" } }} />
              </InputAdornment>
            }
          />
        </FormControl>
        </Card>
    </Container>
    </>
  );
};

export default OfferPage;
