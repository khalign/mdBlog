import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostLink = styled(Link)`
  text-decoration: none;
`
const PostTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({ data }) => {
  console.log(data);
  
  const { nodes } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>

      <p>{data.allMarkdownRemark.totalCount} Posts</p>

      {nodes.map(node => {
        const md = node.frontmatter
        return (
          <div key={node.id}>
            <PostLink to={node.fields.slug}>
              <PostTitle>
                {md.title} - {md.date}
              </PostTitle>
            </PostLink>

            <p>{node.excerpt}</p>
          </div>
        )
      })}

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      nodes {
        excerpt
        frontmatter {
          date
          description
          title
        }
        id
        fields {
          slug
        }
      }
    }
  }
`
