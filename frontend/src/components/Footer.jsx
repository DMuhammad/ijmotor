import React from "react";
import Typography from '@mui/material/Typography';

function Footer(props){
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
          <p>Copyright © IJMOTOR {new Date().getFullYear()}.</p>
      </Typography>
    );
}

export default Footer;