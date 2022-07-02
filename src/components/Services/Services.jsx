import React from "react";
import "./Services.css";
import data from "./Service-API";
import Card from "./Card";
import scientyfic_world from "./scientyfic_world.svg";

const Services = () => {
  return (
    <div>
      <section className="services top" id="services">
        <div className="container">
          <div className="heading">
            <h4>Features</h4>
            <h1>What I Do</h1>
          </div>
          <div className="container f_flex top">
            <div className="left top">
              <h2>
                Founder at <span>Scientyfic World</span>
              </h2>
              <p>
                I've founded a blogging website called{" "}
                <a
                  href="https://scientyficworld.org"
                  target="_blank"
                  rel="noreferrer dofollow"
                >
                  Scientyfic World
                </a>
                . In Scientyfic World, I discuss several topics related to
                science, technology, coding etc.
              </p>
              <div className="col_1">
                <h4>FOLLOW US:</h4>
                <div className="button">
                  <a
                    href="https://www.facebook.com/scientificworldpage"
                    target="_blank"
                    rel="noreferrer dofollow"
                  >
                    <button className="social">
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCwr5uqeyZFRibPJ-HnhrbIw"
                    target="_blank"
                    rel="noreferrer dofollow"
                  >
                    <button className="social">
                      <i class="fab fa-youtube"></i>
                    </button>
                  </a>
                  <a
                    href="https://twitter.com/KongerSnehasish"
                    target="_blank"
                    rel="noreferrer dofollow"
                  >
                    <button className="social">
                      <i class="fab fa-twitter"></i>
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/scientyficworldorg"
                    target="_blank"
                    rel="noreferrer dofollow"
                  >
                    <button className="social">
                      <i class="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="right_img">
                <img src={scientyfic_world} alt="" />
              </div>
            </div>
          </div>
            <h4>BESIDES THAT, <span>I'm a</span> </h4>
          <div className="content grid">
            {data.map((val, index) => {
              return (
                <Card
                  key={index}
                  image={val.image}
                  title={val.title}
                  desc={val.desc}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
