import React from "react";
import "./Hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

import hero from "./Hero.svg";
import skill_1 from "./SKILLs/skill_1.svg";
import skill_2 from "./SKILLs/skill_2.svg";
import skill_3 from "./SKILLs/skill_3.svg";
import skill_4 from "./SKILLs/skill_4.svg";
import skill_5 from "./SKILLs/skill_5.svg";
import skill_6 from "./SKILLs/skill_6.svg";
const Hero = () => {
  const words = [" Blogger", " Web Developer", " SEO Professional", " Sketch Artist"];
    const { text } = useTypewriter({
        words,
        loop: 0, // Infinit
    });
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>&lt;Hello World /&gt;</h3>
            <h1>
              I’m <span>Snehasish Konger</span>
            </h1>
            <h2>
              a
              <span>{text}</span><Cursor/>
            </h2>

            
            <p>
              From past 2 years I'm doing the blogging stuff and have written
              300+ blogs in several platforms.
            </p>
            <p>
              I'm also learning front-end development and trying to go deep in
              this domain. I'm a sketch artist and I draw portraits basically.
              I'm further learning digital sketching and so on.
            </p>
            <p>
              Finally, I've started youtubing Besides that I'm a 3rd year IT
              student and I'm currently pursuing my B.Tech degree from "Techno
              International Newtown". and focusing on it to make more
              knowledgable contents for my readers and viewers.
            </p>
            
            <a href='/CV.pdf' download><button className="home-btn">Download CV</button></a>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <a
                    href="https://www.facebook.com/snehasish.konger.75"
                    target="_blank"
                    rel="noreferrer dofollow"
                  >
                    <button className="new">
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </a>
                  <a
                    href="https://twitter.com/KongerSnehasish"
                    target="_blank"
                    rel="noreferrer dofollow"
                  >
                    <button className="new">
                      <i class="fab fa-twitter"></i>
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/snehasish-konger/"
                    target="_blank"
                    rel="noreferrer dofollow"
                  >
                    <button className="new">
                      <i class="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div className="col_1">
                <h4>BEST SKILL ON</h4>
                <button className="new">
                  <img src={skill_1} alt="" />
                </button>
                <button className="new">
                  <img src={skill_2} alt="" />
                </button>
                <button className="new">
                  <img src={skill_3} alt="" />
                </button>
                <button className="new">
                  <img src={skill_4} alt="" />
                </button>
                <button className="new">
                  <img src={skill_5} alt="" />
                </button>
                <button className="new">
                  <img src={skill_6} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
