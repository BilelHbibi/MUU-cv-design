import React from "react";
import Heading from "./common/Heading";
import { work } from "../data";

const Work = () => {
  return (
    <>
      <section className="work education creative mrTB">
        <div className="container">
          <div className="itemContent">
            <Heading title="empolye" />
            <div className="content flex">
              <div className="contentLeft">
                {work.map((item) => {
                  const { years, compnay, desc } = item;
                  return (
                    <>
                      <div className="box flex">
                        <button className="primary-btn">{years}</button>
                        <h2>
                          {compnay}
                          <br />
                          <p>{desc}</p>
                        </h2>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="contentRight">
                <img src="./images/employment-bg.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
