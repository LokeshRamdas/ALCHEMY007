import React, { useState } from "react";
import Manual from "./Manual"
import Auto from "./Auto"
export default function Home() {
  const [ivalues, isetValues] = useState({});
  
  return(

  <>
  <div>
<h2>Register for warranty manually</h2>
  <Manual values = {ivalues}/>
  </div>

  <div>
<h2>Register Warranty by uploading the Flipkart Invoice</h2>    
  <Auto setter={(i)=>{isetValues(i)}}/>
{console.log(ivalues)}
  </div>

  </>
  );

}
