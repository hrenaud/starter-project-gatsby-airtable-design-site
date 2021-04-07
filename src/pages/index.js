import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from "../components"
import SEO from "../components/seo"

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Layout>
      <Hero projects={projects} />
      <About />
      <Projects projects={projects} title="latest projects" />
      <Survey title="survey" />
      <Slider title="Reviews" />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      sort: { fields: data___date, order: DESC }
      limit: 3
    ) {
      nodes {
        data {
          date(formatString: "YYY, Do MM")
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          name
          type
        }
        id
      }
    }
  }
`

export default HomePage
