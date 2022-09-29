import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(() => false);
 return(
<>
<DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
    />
<h1>Welcome to Alchemy007</h1>
<p>This is a demo model of our WebSite.
   
    If the customer has can issue they can enter some basic details and they will be redirected to Flipkart Support Team
</p>
<p> Currenty user can Register for warranty either manually or by uploading the invoice.
    User can also get the warranty details by entering the orderID.</p>
    <p>
    If the customer has can issue they can enter some basic details and they will be redirected to Flipkart Support Team
    </p>
</>
 );  
}
