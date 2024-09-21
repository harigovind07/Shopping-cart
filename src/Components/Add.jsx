import React from 'react'

const Add = () => {
  return (
    <div>
      <div className="container">
      <nav class="navbar fixed-top navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><b>Shopping Cart</b></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><b>Add</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/search"><b>Search</b></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/view"><b>View</b></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="row g-3" style={{marginTop:'55px'}}>
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label"><b>Product Name</b></label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label"><b>Image</b></label>
              <input type="file" name="" id="" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label"><b>Description</b></label>
              <textarea name="" id="" cols="30" rows="10" className="form-control"></textarea>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label">Price</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label"><b>Rating</b></label>
                                        <br />
                                        <label htmlFor="" className="form-check-label">5</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />
                                        <br />
                                        <label htmlFor="" className="form-check-label">4</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />
                                        <br />
                                        <label htmlFor="" className="form-check-label">3</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />
                                        <br />
                                        <label htmlFor="" className="form-check-label">2</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />
                                        <br />
                                        <label htmlFor="" className="form-check-label">1</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />
                                        <br />
                                        <label htmlFor="" className="form-check-label">0</label>
                                        <input type="radio" name="radio" id="" className="form-check-input" />  
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label"><b>Brand</b></label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label"><b>Manufacturing date</b></label>
              <input type="date" name="" id="" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label"><b>Expiry date</b></label>
            <input type="date" name="" id="" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <label htmlFor="" className="form-label"><b>Dealer Name</b></label>
              <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Add
