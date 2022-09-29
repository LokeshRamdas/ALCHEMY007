import Button from "react-bootstrap/Button";

function PlaintextExample() {
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
      
    <form>
    <div class="col-md-4 col-md-offset-4">
      <div class="form-group col-md-6">
        <label for="ProdName">Product Name</label>
        <input type="text" class="form-control" id="ProdName" name="Product_Name" placeholder="Product Name"></input>
      </div>
      <div class="form-group col-md-6">
        <label for="Brand">Brand Name</label>
        <input type="text" class="form-control" id="Brand" name = "Brand_Name" placeholder="Brand Name"></input>
      </div>
    </div>
    <div className="form-row">
      <div className="form-group col-md-6">
        <label for="inputCity">City</label>
        <input type="text" className="form-control" id="inputCity" placeholder='Please enter your city'></input>
      </div>
    </div>
   <div>
    <a target="www.flipkart.com" className="fcc-btn" href="www.flipkart.com">
      <Button variant="primary" className="btn btn-primary" onClick={() => openInNewTab('https://www.flipkart.com/helpcentre')}>Contact Support Team</Button>
      </a> 
      </div>
  </form>
  );
}

export default PlaintextExample;