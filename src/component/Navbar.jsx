import React, { useState } from "react";

const Navbar = () => {
  const [sidebar, setSidbar] = useState(false);
  return (
    <>
      <header>
        <div className="container flexSB">
          <div className="logo">
            <h1>
              <span>m</span>UU
            </h1>
          </div>

          <nav>
            <button className="toggle" onClick={() => setSidbar(!sidebar)}>
              {sidebar? <i class="fa-solid fa-times"></i>:<i class="fa-solid fa-bars"></i>}
            </button>
            <ul className={sidebar? "nav-links-sidebar":"nav-links"} onClick={()=>setSidbar(false)}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/creative">Creative</a>
              </li>
              <li>
                <a href="/educations">Educations</a>
              </li>
              <li>
                <a href="/works">Works</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
