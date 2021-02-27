import { SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/constants'
import React from 'react'
import {Container, Divider, Grid, Header, List, Segment,} from 'semantic-ui-react'
import Link from 'next/link'

export default function Footer() {
  return (
      <footer>
      <Segment vertical>
          <Container textAlign='center'>
              <Divider section />

              <Grid divided stackable>
                  <Grid.Column width={3}>
                      <Header as='h4' content='FNF' />
                      <List link>
                          <List.Item as='a'>

                              <Link href="https://fnf.org.uk/">
                                  Families need Fathers main site
                              </Link>

                          </List.Item>
                      </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                      <Header as='h4' content='DAD.Info' />
                      <List link>
                          <List.Item as='a'>

                              <Link href="https://www.dad.info/">
                                  DAD.Info - Because Dads Matter!
                              </Link>

                          </List.Item>
                      </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                      <Header as='h4' content='Fegans' />
                      <List link>
                          <List.Item as='a'>

                              <Link href="https://www.fegans.org.uk/">
                                  Counselling Children, Supporting Parents
                              </Link>

                          </List.Item>
                      </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                      <List link>
                          <List.Item as='a'>

                                  <Link href="/">
                                      <Header as='h1' image='/images/120x80px-fnf-logo.png' content={SITE_NAME}/>
                                  </Link>
                                  © 2021 All Rights Reserved

                          </List.Item>
                      </List>
                  </Grid.Column>
              </Grid>

              <Divider section />

              <List horizontal divided link size='small'>
                  <List.Item as='a' href='#'>
                      Site Map
                  </List.Item>
                  <List.Item as='a' href='#'>
                      Contact Us
                  </List.Item>
                  <List.Item as='a' href='#'>
                      Terms and Conditions
                  </List.Item>
                  <List.Item as='a' href='#'>
                      Privacy Policy
                  </List.Item>
              </List>
          </Container>
      </Segment>
      </footer>
      )

}



