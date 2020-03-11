import React from "react"

const Contact = () => {
  return (
    <section id="contact" className="contact js__section">
      <div data-aos="fade-up" className="aos-init aos-animate">
        <h1 className="contact__subheader">Whats next?</h1>

        <h2 className="contact__header  js__mainheader">Contact me</h2>
        <p className="contact__text">
          Although I'm not currently looking for freelance opportunities, my
          inbox is always open. Whether for a potential project or just to say
          hi, I'll try my best to answer your email!
        </p>
        <button className="js__button">
          <a href="mailto:johannes.schwegler@outlook.de">Hallo sagen</a>
        </button>
      </div>
    </section>
  )
}

export default Contact
