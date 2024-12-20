import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component"
import ProductCard from '../components/ProductCard'
import Color from '../components/Color'


function Product() {
  const [grid, setGrid]=useState(4);
  
  return (
    <>
    <Meta title={"Products"}/>
    <BreadCrumb title="Products" />
    <div className='store-wrapper home-wrapper-2 py-5'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Shop By Categories </h3>
                <div>
                  <ul className='ps-0'>
                    <li>Wtach</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filter By </h3>
                <div>
                  <h5 className='sub-title'>Availability</h5>
                    <div>
                    <div className='form-check'>
                      <input
                      className='form-check-input'
                      type='checkbox'
                      value=""
                      id=""
                       />
                      <label className='form-check-label' htmlFor="">
                        In Stock(1)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                      className='form-check-input'
                      type='checkbox'
                      value=""
                      id=""
                      />
                      <label className='form-check-label' htmlFor="">
                        Out of Stock(0)
                      </label>
                    </div>
                    </div>
                    <h5 className='sub-title'>Price</h5>
                    <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                    <input type="number" 
                      className="form-control py-12 " 
                      id="floatingInput" 
                      placeholder="from" />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating ">
                      <input type="number" 
                      className="form-control py-12 " 
                      id="floatingInput" 
                      placeholder="to" />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                    </div>
                    <h5 className='sub-title'>Colors</h5>
                    <div>
                      <div>
                        <Color />
                      </div>
                    </div>
                    <h5 className='sub-title'>Size</h5>
                    <div>
                    <div className='form-check'>
                      <input
                      className='form-check-input'
                      type='checkbox'
                      value=""
                      id="color-1"
                       />
                      <label className='form-check-label' htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                      className='form-check-input'
                      type='checkbox'
                      value=""
                      id="color-2"
                       />
                      <label className='form-check-label' htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                      className='form-check-input'
                      type='checkbox'
                      value=""
                      id="color-3"
                       />
                      <label className='form-check-label' htmlFor="color-3">
                        L (2)
                      </label>
                    </div>
                    <div className='form-check'>
                      <input
                      className='form-check-input'
                      type='checkbox'
                      value=""
                      id="color-4"
                       />
                      <label className='form-check-label' htmlFor="color-4">
                        X (2)
                      </label>
                    </div>
                    </div>

                </div>           
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Product Tags </h3>
              <div className='product-tags d-flex flex-wrap align-items-center gap-10 '>
                <span className='badage bg-light text-secondary rounded-3 py-2 px-3'>Headphone</span>
                <span className='badage bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                <span className='badage bg-light text-secondary rounded-3 py-2 px-3'>Watch</span>
                <span className='badage bg-light text-secondary rounded-3 py-2 px-3'>Mobile</span>

              </div>
            </div>

            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Random Product </h3>
              <div className='random-products mb-3 d-flex'>
                <div className='w-50'>
                  <img className='img-fluid' src='images/headphone.jpg' alt='watch'/>
                </div>
                <div className='w-50'>
                  <h5>kids Headphone bulk 10 pack multi colored for students</h5>
                  <ReactStars 
                    count={5}
                    value={3}
                    edit={false} /* if i want the user edit make it true*/
                    size={24}
                    activeColor="#ffd700"
                    />
                    <b>$ 3000</b>
                </div>
              </div>

              <div className='random-products d-flex'>
                <div className='w-50'>
                  <img className='img-fluid' src='images/homeapp.jpg' alt='watch'/>
                </div>
                <div className='w-50'>
                  <h5>kids Headphone bulk 10 pack multi colored for students</h5>
                  <ReactStars 
                    count={5}
                    value={3}
                    edit={false} /* if i want the user edit make it true*/
                    size={24}
                    activeColor="#ffd700"
                    />
                    <b>$ 3000</b>
                </div>
              </div>
            </div>
          </div>
       
        <div className='col-9 '>
          <div className='filter-sort-grid mb-4'>
            <div className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-10 '>
              <p className='mb-0 d-block' style={{"width":"100px"}}>Sort By:</p>
              <select name='' defaultValue={"normal"} className='form-control form-select' id=''>
                <option value="manual">Featured</option>
                <option value="best-selling" >Best Selling</option>
                <option value="title-ascending">Alphabetically, A-Z</option>
                <option value="title-descending">Alphabetically, A-Z</option>
                <option value="price-ascending">Price, low to high</option>
                <option value="price-decending">Price, highto low</option>
                <option value="created-ascending">Date, old to new</option>
                <option value="created-descending">Date, new to old</option>

              </select>
            </div>
            <div className='d-flex align-items-center gap-10'>
              <p className='totalproducts mb-0'>21 Products</p>
              <div className='d-flex gap-10 align-items-center  grid'>
                <img onClick={()=>{setGrid(3);}} src="images/gr4.svg" className='d-block img-fluid' alt="grid"/>
                <img onClick={()=>{setGrid(4);}} src="images/gr3.svg" className='d-block img-fluid' alt="grid"/>
                <img onClick={()=>{setGrid(6);}} src="images/gr2.svg" className='d-block img-fluid' alt="grid"/>
                <img onClick={()=>{setGrid(12);}} src="images/gr.svg" className='d-block img-fluid' alt="grid"/>

              </div>

            </div>
            </div>
            
          </div>
          <div className='products-list py-5'>
            <div className='d-flex  flex-wrap gap-10'>
            <ProductCard grid={grid}/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Product

