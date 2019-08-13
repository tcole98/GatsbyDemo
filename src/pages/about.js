import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <Header headerText={data.site.siteMetadata.title} />
    <Header headerText="It's pretty cool" />
    <p>Such wow. Very React.</p>
  </Layout>
)
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`