import Button from "react-bootstrap/Button";

function PlaintextExample() {
  const openInNewTab = url => {
    window.open(url);
  };
  return (
   <>
  <div style={{backgroundColor:'cornsilk', width:'1400px',height:'700px'}}>
  {/* <a className="fcc-btn" href="www.flipkart.com"> */}
      <Button variant="primary" className="btn btn-primary" onClick={() => openInNewTab('https://www.flipkart.com/helpcentre')}>Contact Support Team</Button>
      </div>
   </>
   
  );
}

export default PlaintextExample;