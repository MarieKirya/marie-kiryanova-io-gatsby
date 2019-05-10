import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/utils/seo"

const NotFoundPage = () => (
  <Layout>
    <div className={"container"}>
      <SEO title="404: Not found" />
      <h1>404 - Page Not Found</h1>
    </div>
  </Layout>
)

export default NotFoundPage
