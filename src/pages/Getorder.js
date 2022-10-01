import React, { useState,useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';



function MyVerticallyCenteredModal(props) {
  const [orderid,setorderid] = useState("");
 // const [values,setValues] = useState({});
  const handleSubmit1 = async() => {
    console.log("hello")
  var REGISTER_URL = "/getinfo/orderid/"+orderid
  const response = await axios.get(REGISTER_URL,{'Access-Control-Allow-Origin': '*'})
  console.log(response.data);
  props.values(response.data)

}
 
  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Get Order Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Enter the order ID to retrieve the NFT</h4>
        <form>
  <div className="form-group row">
    <label htmlFor="orderid" className="col-sm-2 col-form-label col-form-label-lg">OrderID</label>
    <div className="col-sm-10">
      <input type="text" className="form-control form-control-lg" id="orderid" name="orderid" placeholder="enter the order ID" value={orderid} onChange={(e)=>setorderid(e.target.value)}></input>
    </div>
  </div>
</form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {handleSubmit1();props.onHide()}}>GET NFT</Button>
      </Modal.Footer>
    </Modal>
  );
}

const App = () => { 
  const [modalShow, setModalShow] = React.useState(false);
  const [orderid,setorderid] = useState("");
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({});

  return (
    <>
    <h2>Enter the OrderId to retrieve the NFT details</h2>
      <Button variant="primary" onClick={() => {setModalShow(true);}}>
        Get Warranty details
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        values={(v)=>setValues(v)}
      />
      <div>
        {
          (values.flag===1)?<><h3>PRODUCT NAME:{values.name} <br/> ORDERID:{values.description} <br/> OWNERS EMAIL:{values.owner_email} <br/></h3> <a href = {values.opensea} target = "_blank">OPENSEA LINK</a></>:
        (values.flag===0)?<h1>NOT VALID</h1>:<h1></h1>

        }
      </div>
    </>
  );
}

export default App;