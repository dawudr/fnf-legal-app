import Link from 'next/link'
import { SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/constants'
import {Container, Header, Grid} from 'semantic-ui-react'

export default function Customheader({}) {
  return (
      <div className="app-pane " id="top">

          <header className="govuk-header app-header" role="banner" data-module="govuk-header">
          <div className="govuk-header__container app-width-container app-header__container">
              <Container>
              <div className="govuk-header__container">
                  <Grid divided='vertically'>
                      <Grid.Row columns={2}>
                          <Grid.Column>
                              <Link href="/">
                                  <Header as='h1' image='/images/120x80px-fnf-logo.png' content={SITE_NAME} color='yellow'/>
                              </Link>
                          </Grid.Column>
                          <Grid.Column>
                              <Header as='h1' content={SITE_TITLE} textAlign='right' inverted color='grey'/>
                          </Grid.Column>
                      </Grid.Row>
                  </Grid>
              </div>
              </Container>
          </div>
      </header>
      </div>
  )
}





