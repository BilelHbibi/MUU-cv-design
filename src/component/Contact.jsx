import React from 'react'
import Heading from "./common/Heading" 

const Contact = () => {
  return (
    <>
     <div className="contact creative mrTB">
        <div className="container">
            <div className="itemContent">
            <Heading title="Contact" />
            <div className="content flex">
                <div className="contentRight">
                    <img src="./images/contact-bg.jpg" alt="" />
                </div>
                <div className="contentLeft">
                    <span>
                        <i className='fa fa-map-marker-alt'></i>
                        401 Boradway,24th Floor,NY 100013
                    </span>
                    <br /><br />
                    <span>
                        <i className='fa fa-envelop'></i>
                        Dales@gmail.com
                    </span>
                    <br /><br />
                    <span>
                        <i className='fa fa-phone'></i>
                        d+123 456 7889
                    </span>

                    <form >
                        <input type="text" placeholder='Your Name' />
                        <input type="text" placeholder='Your Email' />
                        <input type="text" placeholder='WHAT ARE YOUR INTERESTED IN?' />
                        <textarea cols="30" rows="10" placeholder='YOUR MESSAGE'> </textarea>
                        <button className="primary-btn">
                            SUBMIT <i className="fa fa-long-arrow-alt-right"></i>
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Contact