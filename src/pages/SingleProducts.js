import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component"
import ReactImageZoom from "react-image-zoom";
import watch from "../"
import Color from '../components/Color'
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'

function SingleProduct() {
  const props={
     width:400,
     height:600,
     zoomWidth:600, 
     img:"https://th.bing.com/th/id/R.7f88a04d99b4180c134f3e18d9d5f656?rik=H7nG2JfNd0R%2fmQ&pid=ImgRaw&r=0"};
  const [orderedPrdouct, setorderedProduct] = useState(true);
  
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
     <Meta title={"Product Name"}/>
    <BreadCrumb title="Product Name" />
    <div className='main-product-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <div className='main-product-image'>
          <div> 
            <ReactImageZoom{...props}/>
          </div>
          </div>
          <div className='other-product-images d-flex flex-wrap gap-15'>
            <div><img src='https://th.bing.com/th/id/R.7f88a04d99b4180c134f3e18d9d5f656?rik=H7nG2JfNd0R%2fmQ&pid=ImgRaw&r=0' alt='' className='img-fluid'/></div>
            <div><img src='https://th.bing.com/th/id/R.7f88a04d99b4180c134f3e18d9d5f656?rik=H7nG2JfNd0R%2fmQ&pid=ImgRaw&r=0' alt='' className='img-fluid'/></div>
            <div><img src='https://th.bing.com/th/id/R.7f88a04d99b4180c134f3e18d9d5f656?rik=H7nG2JfNd0R%2fmQ&pid=ImgRaw&r=0' alt='' className='img-fluid'/></div>
            <div><img src='https://th.bing.com/th/id/R.7f88a04d99b4180c134f3e18d9d5f656?rik=H7nG2JfNd0R%2fmQ&pid=ImgRaw&r=0' alt='' className='img-fluid'/></div>

          </div>
           </div>
        <div className='col-6'> 
           <div className='main-product-details'>
            <div className='border-bottom'>
               <h3 className='title'>Kids Headphones Bulik 10pack Multi Colored for Students</h3>
             </div>
             <div className='border-bottom py-3'>
                <p className='price'>$100.00</p>
                <div className='d-flex align-items-center gap-10'>
                    <ReactStars 
                    count={5}
                    value={3}
                    edit={false} /* if i want the user edit make it true*/
                    size={24}
                    activeColor="#ffd700"
                    />
                    <p className='mb-0 t-review'>(2 reviews)</p>
                    </div>
                    <a href='#review' className='review-btn'>Write a Review</a>
             </div>
             <div className='border-bottom py-3'>
                <div className='d-flex gap-10 my-2 align-items-center'>
                <h3 className='product-heading'>Type:</h3>
                <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex gap-10 my-2 align-items-center'>
                <h3 className='product-heading'>Brand:</h3>
                <p className='product-data'>Havels</p>
                </div>
                <div className='d-flex gap-10 my-2 align-items-center'>
                <h3 className='product-heading'>Category:</h3>
                <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex gap-10 my-2 align-items-center'>
                <h3 className='product-heading'>Tags:</h3>
                <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex gap-10 my-2 align-items-center'>
                <h3 className='product-heading'>Availability:</h3>
                <p className='product-data'>In Stock</p>
                </div>
                <div className='d-flex gap-10  flex-column mt-2 mb-3'>
                <h3 className='product-heading'>Size:</h3>
                <div className='d-flex flex-wrap gap-15'>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                    <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>

                </div>
                </div>
                <div className='d-flex gap-10  flex-column mt-2 mb-3'>
                <h3 className='product-heading'>Color:</h3>
                <Color />
                </div>
                <div className='d-flex gap-15 align-items-center flex-row mt-2 mb-3'>
                <h3 className='product-heading'>Quantity:</h3>
                <div className=''>
                    <input 
                     type='number'
                     style={{width:"70px"}}
                     name=''
                     min={1}
                     max={10}
                     id=''
                     className='form-control'/>
                </div>
                <div className='d-flex justify-content align-items-center gap-30 ms-5'>
                      <button className='button border-0' type='submit'> Add to Cart</button>
                      <button className='button signup' type='submit'> Buy it now</button>
                    </div>
                   
                </div>
                <div className='d-flex gap-15 align-items-center'>
                     <div>
                        <a href=''>
                           <TbGitCompare className='fs-5 me-2'/> Add to Compare</a>
                     </div>
                     <div>
                        <a href=''>
                            <AiOutlineHeart className='fs-5 me-2'/>Add to Wishlist</a>
                     </div>
                </div>
                <div className=' d-flex gap-10 my-3  flex-column'>
                <h3 className='product-heading'>Shipping & Returns:</h3>
                <p className='product-data'>Free shipping & returns available on return all orders <br/>
                    we ship all orders with <b>5-10 business days!</b> </p>
                </div>
                <div className='d-flex  gap-10 my-3 align-items-center'>
                <h3 className='product-heading'>Product Link:</h3>
                <a href='javascript:void(0);' 
                onClick={()=>{copyToClipboard("https://th.bing.com/th/id/R.7f88a04d99b4180c134f3e18d9d5f656?rik=H7nG2JfNd0R%2fmQ&pid=ImgRaw&r=0")}}>
                    Copy product link</a>
                </div>
             </div>
            </div> 
        </div>
      </div>
    </div>
    </div>
    
    <div className='description-wrapper py-5 home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
        <h4>Description</h4>
       <div className="bg-white p-3">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore
           magna aliqua  consectetur adipiscing elit,sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua
          </p>
       </div>
        </div>
        </div>
    </div>
    </div>

    <section id='review' className='reviews-wrapper home-wrapper-2'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-12'>
          <h3>Reviews</h3>
          <div className='review-inner-wrapper'>
          <div className='review-head d-flex justify-content-between align-items-end'>
            <div> 
            <h4 className='mb-2'>Customer Reviews</h4>
            <div className='d-flex align-items-center gap-10'>
            <ReactStars 
                    count={5}
                    value={3}
                    edit={false} /* if i want the user edit make it true*/
                    size={24}
                    activeColor="#ffd700"
                    />
            <p className='mb-0'>Based on 2 Reviews</p>
            </div>
            </div>
            {
              orderedPrdouct&&(
              <div>
                <a className='text-dark text-decoration-underline' href=''>Write a Review</a>
              </div>)
            }
          </div>
          <div className='review-form py-4' >
            <h4>Write a Review</h4>
          <form action='' className='d-flex flex-column gap-15'>
                <div>
                <ReactStars 
                    count={5}
                    value={3}
                    edit={true} /* if i want the user edit make it true*/
                    size={24}
                    activeColor="#ffd700"
                    />
                </div>
                <div>
                  <textarea 
                  name='' 
                  id='' 
                  rows="4"
                  className='w-100 form-control'
                  placeholder='Comment'
                  ></textarea>
                </div>
                <div className='d-flex justify-content-end'>
              <button className='button border-0'>Submit Review</button>
            </div>
           </form>
          </div>
          <div className='reviews mt-4'>
            <div className='review'>
            <div className='d-flex align-items-center gap-10'>
                    <h6 className='mb-0'>Navdeep</h6>
                    <ReactStars 
                    count={5}
                    value={3}
                    edit={false} /* if i want the user edit make it true*/
                    size={24}
                    activeColor="#ffd700"
                    />
                    </div>
                    <p className='mt-3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore
           magna aliqua  consectetur adipiscing elit,sed do eiusmod
           tempor incididunt ut labore et dolore magna aliqua
           </p>
            </div>
          </div>
         </div>
        </div>
        </div>
    </div>
    </section>
    <section className='popular-wrapper py-5 home-wrapper-2 '>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Our Popular Products</h3>
          </div>
          <div className='row'>
          <ProductCard />
         
            </div>
        

          
        </div>
      </div>
    </section>
    
    </>
  )
}

export default SingleProduct