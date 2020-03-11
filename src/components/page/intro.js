import React, { useEffect } from "react"
import { TimelineLite } from "gsap"

const Intro = () => {
  useEffect(() => {}, [])
  return (
    <section className="intro">
      <div className="intro__content" data-aos="fade-up">
        <h1>Hello, I`m </h1>
        <h2 className="js__mainheader">Johannes Schwegler.</h2>
        <h3 className="js__mainheader--second">I build things for the web.</h3>
        <p className="js__text">
          I`m a student of business computer science and Softwareengineer
          (Freelancer) from Aulendorf, specialized on building high-quality
          Websites and Applications with great design.
        </p>

        <button className="js__button">
          <a href="mailto:johannes.schwegler@outlook.de">Contact me</a>
        </button>
      </div>
    </section>
  )
}

export default Intro
