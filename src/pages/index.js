import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TerminalHero from "../components/terminal-hero"
import ContactFormBanner from "../components/contact-form"
import Icon from '@mdi/react'
import { mdiGatsby, mdiDrupal } from '@mdi/js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`marie`, `kiryanova`, `react`, `gatsby`, `drupal`, `portfolio`]} />
    <TerminalHero/>

    <div className={'banner banner--decoupled'}>
      <div className={'container'}>
        <h2>Did you know this site is open source?</h2>
        <h3>See the source to both Drupal and Gatsby on Github</h3>

        <div className={'columns'}>
          <div className={'column'}>
            <div className={'tech-icon tech-icon--gatsby'}><Icon path={mdiGatsby} color={'#663399'} /></div>
            <div className={'buttons'}><a href={'https://github.com/mariekirya/marie-kiryanova-io-gatsby'} className="button button--cta"><span className="mdi mdi-github-circle"/> Source</a></div>
          </div>
          <div className={'column'}>
            <div className={'tech-icon tech-icon--drupal'}><Icon path={mdiDrupal} color={'#28a9e0'} /></div>
            <div className={'buttons'}><a href={'https://github.com/mariekirya/marie-kiryanova-io-cms'} className="button button--cta"><span className="mdi mdi-github-circle"/> Source</a></div>
          </div>
        </div>
      </div>
    </div>
    <ContactFormBanner/>
  </Layout>
)

export default IndexPage
