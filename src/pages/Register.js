import React, { useState } from "react";
import Manual from "./Manual"
import Auto from "./Auto"
export default function Home() {
  const [ivalues, isetValues] = useState({});
  
  return(

  <>
<div style={{backgroundColor:'cornsilk', width:'1400px',height:'700px'}}>
<div>
<br/><h3 style={{fontFamily: 'georgia',fontSize:'25px',fontWeight:'bold'}}>Register for warranty manually</h3>
  <Manual values = {ivalues}/>
  </div>

  <div>
<h3 style={{fontFamily: 'georgia',fontSize:'25px',fontWeight:'bold'}}>Register Warranty by uploading the Flipkart Invoice</h3>    
  <Auto setter={(i)=>{isetValues(i)}}/>
{console.log(ivalues)}
  </div>
</div>
  

  </>
  );

}
