import React, { useState,useRef,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

  const App = (props) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [order_id,setorder_id] = useState("");
  const [prod_name,setprod_name] = useState("");
  const [brand,setbrand] = useState("");
  const [img_url,setimg_url] = useState("");
  const [prod_url,setprod_url] = useState("");
  const [serial_no,setserial_no] = useState("");
  const [purch_date,setpurch_date] = useState("");
  const [warranty_days,setwarranty_days] = useState("");
  const [email,setemail] = useState("");
  const [values,setValues] = useState({});
  const [flag,setFlag] = useState(0);
  useEffect(()=>{
    let ivalues = props.values;
    console.log(ivalues);
    if("order_id" in ivalues)
    {
      if(flag ==0)
      {
      console.log("gotsef");
      setorder_id(ivalues.order_id);
      setprod_name(ivalues.product_name);
      setserial_no(ivalues.serial_number);
      setwarranty_days(ivalues.warranty_days);
      setpurch_date(ivalues.invoice_date.split("-").reverse().join("-"));
      handleShow(true);
      setFlag(1);
      }
    }
      });
    const handleSubmit = async() => {
    
    const REGISTER_URL = "/store/warranty";
    const response = await axios.post(REGISTER_URL,JSON.stringify({order_id,prod_name,brand,img_url,prod_url,serial_no,purch_date,warranty_days,email}),
    {
headers:{'Content-Type':'application/json','Access-Control-Allow-Origin': '*'},
    }
    
    );
    console.log(response);
    handleClose();
    setValues(response.data);
    
  }
     

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Enter the details Manually
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>REGISTER WARRANTY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <form onSubmit={handleSubmit}>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="order_id">Order ID</label>
      <input type="text" className="form-control" id="order_id" name="order_id" placeholder="Enter the Order ID" value={order_id}
        onChange={(e)=>setorder_id(e.target.value)}></input>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="prod_name">product name</label>
      <input type="text" className="form-control" id="prod_name" name="prod_name" placeholder="Enter the product name" value={prod_name}
       onChange={(e)=>setprod_name(e.target.value)}></input>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="brand">Brand</label>
    <input type="text" className="form-control" id="brand" name="brand" placeholder="Enter the brand name" value={brand}
        onChange={(e)=>setbrand(e.target.value)} ></input>
  </div>
  <div className="form-group">
    <label htmlFor="img_url">Image URL</label>
    <input type="url" className="form-control" id="img_url" name="img_url" placeholder="Enter the image URL" value={img_url}
        onChange={(e)=>setimg_url(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="prod_url">Product URL</label>
    <input type="url" className="form-control" id="prod_url" name="prod_url" placeholder="Enter the product URL" value={prod_url}
        onChange={(e)=>setprod_url(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="serial_no">Serial No</label>
    <input type="text" className="form-control" id="serial_no" name="serial_no" placeholder="Enter the serial number" value={serial_no}
        onChange={(e)=>setserial_no(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="purch_date">Purchase Date</label>
    <input type="date" className="form-control" id="purch_date" name="purch_date" placeholder="Enter the purchase date" value={purch_date}
        onChange={(e)=>setpurch_date(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="warranty_days">Warranty Days</label>
    <input type="number" min="1" max="365" className="form-control" id="warranty_days" name="warranty_days" placeholder="Enter the warranty days" value={warranty_days}
        onChange={(e)=>setwarranty_days(e.target.value)}></input>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email</label>
    <input type="email" className="form-control" id="email" name="email" placeholder="Enter the email" value={email}
        onChange={(e)=>setemail(e.target.value)}></input>
  </div>

</form>
          </div>
        
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="btn btn-primary" onClick={handleSubmit}>Register for warranty</Button><br/><br/>
        </Modal.Footer>
      </Modal>
     

    
 
<div>
  {
(values.db_flag===1)?<><br/><br/><h3 style={{fontFamily: 'garamond',fontSize:'20px'}}>SUCCESS.... NFT WILL BE READY IN A MOMENT<br/></h3> <a style={{ backgroundColor: 'white',
color: 'black',
 border: '2px solid orange',
 padding: '10px 20px',
 textAlign: 'center',
 textDecoration: 'none',
 display: 'inline-block'
}}href = {values.result} target = "_blank">OPENSEA LINK</a><br/><br/></>:
        (values.db_flag===0)?<h1>NOT VALID</h1>:<h1></h1>
  }
</div>
    </>
    
  );
}
export default App;