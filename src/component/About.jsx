import React from "react";
import { about } from "../data";
import Heading from "./common/Heading";

const About = () => {
  return (
    <>
      <div className="about mrTB">
        <div className="container">
          <div className="itemContent ">
            <Heading title="about me" />
            {about.map((item) => {
              const {
                name,email, phone,fax,dob,nation,heading,title,desc} = item;
              return (
                <>
                  <div className="content flex">
                    <div className="contentLeft">
                      <div className="details flex">
                        <h2 className="h2Top">Name:</h2>
                        <h2>{name}</h2>
                      </div>
                      <div className="details flex">
                        <h2 className="h2Top">Email:</h2>
                        <h2>{email}</h2>
                      </div>
                      <div className="details flex">
                        <h2 className="h2Top">Phone:</h2>
                        <h2>{phone}</h2>
                      </div>
                      <div className="details flex">
                        <h2 className="h2Top">Fax:</h2>
                        <h2>{fax}</h2>
                      </div>
                      <div className="details flex">
                        <h2 className="h2Top">Date of birth:</h2>
                        <h2>{dob}</h2>
                      </div>
                      <div className="details flex">
                        <h2 className="h2Top">Nationality:</h2>
                        <h2>{nation}</h2>
                      </div>
                      <button className="primary-btn">
                        DOWNLOAD RESUME{" "}
                        <i class="fa fa-long-arrow-alt-right"></i>
                      </button>
                    </div>

                    <div className="contentRight">
                      <div className="heading">
                        <h1>{heading}</h1>
                      </div>

                      <div className="para">
                        <span>Hello</span>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
