import React from "react"

const About = () => {
  return (
    <section id="about" className="about js__section" data-aos="fade-up">
      <h1 className="js__header">About me </h1>
      <div className="about__content">
        <p className="about__text js__text">
          Hi! I`m Johannes Schwegler, prospective Software developer and UX
          designer from Aulendorf and like to build Web pages.
          <br /> <br /> Here are a few technologies I've been working with
          recently:
        </p>

        <ul className="about__grid">
          <li> JavaScript (ES6+)</li>
          <li> TypeScript </li>
          <li> React</li>
          <li> Gatsby </li>
          <li> Express</li>
          <li> Node.js</li>
          <li> Django</li>
          <li> Flask</li>
          <li> HTML & (S)CSS</li>

          <li> Wordpress</li>
        </ul>
      </div>
    </section>
  )
}

export default About
