import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectView from "../components/page/project-view"
import Intro from "../components/page/intro"
import About from "../components/page/about"
import Experience from "../components/page/experience"
import Archive from "../components/page/archive"
import Certification from "../components/page/certification"
import Contact from "../components/page/contact"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectJson {
        edges {
          node {
            id
            title
            description
            technologies
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectJson.edges

  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      {/*About */}
      <About />
      {/*Work */}
      <Experience />
      {/*  Projects */}
      <ProjectView projects={projects} />
      {/* weitere Projekte */}
      <Archive />
      {/* Certifications */}
      <Certification />
      {/* Kontakt */}
      <Contact />
    </Layout>
  )
}

export default IndexPage
