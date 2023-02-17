import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  // TODO: create a specific page and query for home

  return (
    <Layout pageTitle="Home Page">
      <p>Home page</p>
    </Layout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Home Page</title>
    </>
  )
}

export default IndexPage