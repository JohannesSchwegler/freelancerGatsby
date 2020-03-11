import React, { useRef, useEffect } from "react"

const Experience = () => {
  let app = useRef(null)
  let list = useRef(null)
  let marker = useRef(null)

  useEffect(() => {
    showItem("21GRAD")
    list.childNodes[0].classList.add("current")
  })
  const onclick = e => {
    Array.from(list.childNodes).map(item => {
      item.classList.remove("current")
    })
    e.currentTarget.classList.add("current")
    showItem(e.currentTarget.dataset.title)
    handleMarker(e.currentTarget.tabIndex)
  }

  const showItem = data => {
    Array.from(app.childNodes).map(child => {
      if (child.dataset.job === data) {
        child.style.display = "block"
      } else {
        child.style.display = "none"
      }
    })
  }

  const handleMarker = position => {
    marker.style.transform = `translateY(${position * 50}px)`
    console.log(position)
  }

  return (
    <section
      id="experience"
      className="work js__section aos-init aos-animate"
      data-aos="fade-up"
    >
      <h1 className="js__header">Experience</h1>
      <div className="work__content">
        <ul className="work__list" ref={el => (list = el)}>
          <li tabIndex="0" data-title="21GRAD" onClick={onclick}>
            21Grad
          </li>

          <li tabIndex="1" data-title="ZF" onClick={onclick}>
            ZF Friedrichshafen AG
          </li>

          <li tabIndex="2" data-title="HRW" onClick={onclick}>
            HRW Weingarten
          </li>
          <div className="work__marker" ref={el => (marker = el)}></div>
        </ul>

        <div className="work__description" ref={el => (app = el)}>
          <div className="work__item" data-job="21GRAD">
            <h2 className="work__title">
              Freelancer <span className="work__title--current">@21GRAD </span>
            </h2>
            <h2 className="work__timestamp">March 2018 - now</h2>

            <ul>
              <li>Entwerfen von Oberflächen mit Adobe XD</li>
              <li>
                Erstellen von Animationen mittels CSS, JavaScript für SVGs
              </li>
            </ul>
          </div>

          <div className="work__item" data-job="ZF">
            <h2 className="work__title">
              Internship<span className="work__title--current">@ZF </span>
            </h2>
            <h2 className="work__timestamp">2018 - 2020</h2>

            <ul>
              <li>
                Erstellen von Frontend-Anwendung mit dem SAP UI5-Framework
              </li>
              <li>Betreuung und Verwaltung von Business-Anwendung</li>
            </ul>
          </div>

          <div className="work__item" data-job="HRW">
            <h2 className="work__title">
              Tutor<span className="work__title--current">@HRW </span>
            </h2>
            <h2 className="work__timestamp">3</h2>

            <ul>
              <li>Entwerfen von Oberflächen mit Adobe XD</li>
              <li>
                Erstellen von Animationen mittels CSS, JavaScript für SVGs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
