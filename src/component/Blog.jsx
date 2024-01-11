import React from 'react'
import Heading from "./common/Heading" 
import { blog } from '../data'

const Blog = () => {
  return (
    <>
      <div className="blog mrTB">
        <div className="container">
            <div className="itemContent">
                <Heading title="Blog"/>
                <div className="box">
                   {blog.map((item=>(
                     <div className="img">
                        <img src={item.cover} alt="" />
                     </div>
                   )))} 
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Blog