import Button from "react-bootstrap/Button";

function PlaintextExample() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
      
   
   <div>
    <a target="www.flipkart.com" className="fcc-btn" href="www.flipkart.com">
      <Button variant="primary" className="btn btn-primary" onClick={() => openInNewTab('https://www.flipkart.com/helpcentre')}>Contact Support Team</Button>
      </a> 
      </div>
  );
}

export default PlaintextExample;