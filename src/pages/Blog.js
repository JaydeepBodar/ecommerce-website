import React from 'react'
import Blogcard from '../component/Blogcard'
import Breadcrumb from '../component/Breadcrumb'
import Helmetc from '../component/Helmetc'
import './styles/blog.css'
const Blog = () => {
  return (
    <React.Fragment>
      <Helmetc title='Blog'/>
      <Breadcrumb title='Blog'/>
      <section className='blog-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3'>
                <div className="filter-card mb-3">
                <div className="filter-title">
                  <h4>Shop by Categories</h4>
                  <div className="p-categories">
                    <ul className="p-0 listview">
                      <li>Watch</li>
                      <li>Tv</li>
                      <li>Camera</li>
                      <li>Laptops</li>
                    </ul>
                  </div>
                </div>
              </div>
                </div>
                <div className='col-lg-9'>
                    <div className='row'>
                        <Blogcard />
                    </div>
                </div>
            </div>
        </div>
      </section> 
    </React.Fragment>
  )
}

export default Blog
