import React from 'react'
import Heading from "./common/Heading" 
import { award } from '../data'


const Award = () => {
  return (
   <>
    <section className="award creative mrTB">
        <div className="container">
            <div className="itemContent">
                <Heading title="awards"/>
                {award.map((item)=>{
                    const{title,desc,cover,img1,img2,img3,img4}=item
                    return(
                        <>
                          <div className="content flex">
                            <div className="contentLeft">
                                <h1>{title}</h1>
                                <p>{desc}</p>
                                <div className="box grid">
                                    <div className="img">
                                        <img src={img1} alt="" />
                                    </div>
                                    <div className="img">
                                        <img src={img2} alt="" />
                                    </div>
                                    <div className="img">
                                        <img src={img3} alt="" />
                                    </div>
                                    <div className="img">
                                        <img src={img4} alt="" />
                                    </div>
                                </div>
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

export default Award