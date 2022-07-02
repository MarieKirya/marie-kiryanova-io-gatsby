import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/utils/seo"
import TerminalHero from "../components/banners/terminal-hero-banner"
import ContactFormBanner from "../components/banners/contact-form-banner"
import BlogBanner from "../components/banners/blog-banner"
import FOSSBanner from "../components/banners/foss-banner"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" keywords={[`marie`, `kiryanova`, `react`, `gatsby`, `drupal`, `portfolio`]} />
    <TerminalHero commands={[
      'composer require drupal/core',
      'vagrant up',
      'gatsby new project-name',
      'git commit -m "Initial commit."',
      'make',
      'ssh marie@client.net',
      'drush cr'
    ]}/>
    <BlogBanner/>
    <FOSSBanner/>
    <ContactFormBanner/>
  </Layout>
)

export default IndexPage
