import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/utils/seo"

const Submission = () => (
  <Layout>
    <div className={"container form-submission-page"}>
      <SEO title="Form Submission" />
      <h1 className={"title"}>Message Received</h1>

      <h5>Thanks for messaging me, I will attempt to respond to any reasonable messages in 2 business days.</h5>

      <Link className="button button--cta inversed" to={"/"}>Return Home</Link>
    </div>
  </Layout>
);

export default Submission;