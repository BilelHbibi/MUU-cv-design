import React from 'react'
import Heading from "./common/Heading" 
import { creative } from '../data'

const Creative = () => {
  return (
    <>
     <section className="creative mrTB">
        <div className="container">
            <div className="itemContent">
                <Heading title="Creative" />
                {creative.map((item)=>{
                    const{heading,title,desc,cover}=item
                    return(
                        <>
                          <div className="content flex">
                            <div className="contentLeft">
                                <i className="fa fa-quote-left quote"></i>
                                <h1>{heading}</h1>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                                <button className="primary-btn">
                                    DOWNLOAD RESUME  <i class="fa fa-long-arrow-alt-right"></i>
                                </button>
                            </div>

                            <div className="contentRight">
                                <img src={cover} alt="" />
                            </div>
                          </div>
                        </>
                    )
                })}
            </div>
        </div>
     </section>
    </>
  )
}

export default Creative