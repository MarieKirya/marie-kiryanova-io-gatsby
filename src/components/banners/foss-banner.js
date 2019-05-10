import React from "react"
import Icon from '@mdi/react'
import { mdiGatsby, mdiDrupal } from '@mdi/js'

const FOSSBanner = () => (
  <div className={'banner banner--decoupled'}>
    <div className={'container'}>
      <h2>Did you know this site is open source?</h2>
      <h3>See the source to both Drupal and Gatsby on Github</h3>

      <div className={'columns'}>
        <div className={'column'}>
          <div className={'tech-icon tech-icon--gatsby'}><Icon path={mdiGatsby} color={'#EFEFEF'} /></div>
          <div className={'buttons'}><a href={'https://github.com/mariekirya/marie-kiryanova-io-gatsby'} className="button button--cta"><span className="mdi mdi-github-circle"/> Source</a></div>
        </div>
        <div className={'column'}>
          <div className={'tech-icon tech-icon--drupal'}><Icon path={mdiDrupal} color={'#EFEFEF'} /></div>
          <div className={'buttons'}><a href={'https://github.com/mariekirya/marie-kiryanova-io-cms'} className="button button--cta"><span className="mdi mdi-github-circle"/> Source</a></div>
        </div>
      </div>
    </div>
  </div>
);

export default FOSSBanner
