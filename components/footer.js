import { SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/constants'
import {Container, Header} from 'semantic-ui-react'
import Link from 'next/link'

export default function Footer() {
  return (
      <footer className="govuk-footer app-footer app-footer--full" role="contentinfo">
          <Container>
          <div className="app-width-container">

                  <div className="govuk-footer__meta">
                      <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">

                          <h2 className="govuk-visually-hidden">Support links</h2>

                          <ul className="govuk-footer__inline-list">

                              <li className="govuk-footer__inline-list-item">
                                  <a className="govuk-footer__link" href="/accessibility">
                                      Accessibility
                                  </a>
                              </li>

                              <li className="govuk-footer__inline-list-item">
                                  <a className="govuk-footer__link" href="/sitemap">
                                      Sitemap
                                  </a>
                              </li>

                              <li className="govuk-footer__inline-list-item">
                                  <a className="govuk-footer__link" href="/disclaimer">
                                      Disclaimer
                                  </a>
                              </li>

                              <li className="govuk-footer__inline-list-item">
                                  <a className="govuk-footer__link" href="/privacy-policy">
                                      Privacy policy
                                  </a>
                              </li>

                          </ul>


                          <div className="govuk-footer__meta-custom">
                              Built by the <a href="/design-system-team" className="govuk-footer__link">{SITE_NAME} team</a>
                          </div>

                      </div>
                      <div className="govuk-footer__meta-item">
                          <Link href="/">
                              <Header as='h1' image='/images/120x80px-fnf-logo.png' content={SITE_NAME}/>
                          </Link>
                          © 2021 All Rights Reserved
                      </div>



                  </div>
          </div>
          </Container>
      </footer>
      )

}



