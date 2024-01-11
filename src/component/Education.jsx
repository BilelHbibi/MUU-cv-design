import React from "react";
import Heading from "./common/Heading";
import { education } from "../data";

const Education = () => {
  return (
    <>
      <section className="education creative mrTB">
        <div className="container">
          <div className="itemContent">
            <Heading title="education" />
            <div className="content flex">
              <div className="contentRight">
                <img src="./images/education-bg.jpg" alt="" />
              </div>
              <div className="contentLeft">
                <p>
                  Education is not the learning of facts, but the training of
                  the mind to think. Education is a gift that none can take
                  away. I am still learning every day.
                </p>
                {education.map((item) => {
                  const { id, name, program, year } = item;
                  return (
                    <>
                      <div className="box flex">
                        <h1>{id}</h1>
                        <h2>
                          {name}
                          <br />
                          <span>{program}</span>
                          <br />
                          <span>{year}</span>
                          <br />
                        </h2>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
