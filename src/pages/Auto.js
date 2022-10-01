import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"

  const App = (props) => {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedFile, setSelectedFile] = React.useState(null);
  
    const handleSubmit = async (event) => {
     console.log("hehhdd");
      const formData = new FormData();
      formData.append("fkinvoice", selectedFile);
      try {
        const response = await axios({
          method: "post",
          url: "/uploadfkinvoice",
          data: formData,
          headers: { "Content-Type": "multipart/form-data",
          'Access-Control-Allow-Origin': '*'}
      
        });
        console.log(response);
        handleClose();
        props.setter(response.data)
      } catch(error) {
        console.log(error)
      }
     
    }
  
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
    }
  return (
    
    <>
        <Button variant="success" onClick={handleShow}>
        Upload the Invoice
      </Button> 
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">REGISTER WARRANTY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <form>
            
  <div className="form-group">
    <label htmlFor="fkinvoice"></label>
    <input type="file" id="fkinvoice"  className="form-control-file" name="fkinvoice" required accept="pdf" onChange={(e)=>handleFileSelect(e)}/>
  </div>
          </form >
  </div>
          <div>
          <h6>Choose the file from your device to register warranty</h6>
          </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
           <input type="button" variant="primary" className="btn btn-primary" value="Upload File" onClick={()=>{handleSubmit();}}/>
        </Modal.Footer>
      </Modal>
    </>
    
  );

}
export default App;