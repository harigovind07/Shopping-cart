import React from 'react'

const Search = () => {
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
<div className="row g-3" style={{marginTop:'25px'}}>
        <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label"><b>Product Name</b></label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <buttoon className="btn btn-success">Search</buttoon>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Search
