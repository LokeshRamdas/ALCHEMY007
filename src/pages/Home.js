import { color, fontWeight } from "@mui/system";
import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Home() {
 return(
<>
<div style={{backgroundColor:'cornsilk', width:'1400px',height:'700px'}}>
<h1 style={{fontFamily: 'georgia',fontWeight:'bold'}}>Welcome to Alchemy007</h1>
<p style={{fontFamily: 'garamond',fontSize:'20px'}}>This is a demo model of our WebSite.
</p>
<p style={{fontFamily: 'garamond',fontSize:'20px'}}> Currenty the user can Register for warranty either manually or by uploading the invoice.
    User can also get the existing warranty details by entering the orderID.</p>
    <p style={{fontFamily: 'garamond',fontSize:'20px'}}>
    If the customer has can issue regarding their product they can visit the Contact section and will be redirected to Flipkart Support Team
    </p>
</div>

</>
 );  
}
