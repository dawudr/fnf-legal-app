import Layout from '@/components/Layout'
import Link from 'next/link'
import {baseUrl, fetchQuery} from '@/lib/api-fnf'
import {Steps} from '@/components/Steps'
import {Articles} from '@/components/Articles'
import {Header, Icon, Breadcrumb, Container, Divider, Grid, Button, Segment, Progress} from 'semantic-ui-react'
import React, {useState} from 'react';


export default function Step({step}) {

    const arrayLength = step.articles.length

    return (
        <Layout title={step.name} description={step.description}>

            <Breadcrumb>
                <Breadcrumb.Section link>
                    <Link href={`/`}>
                        <a>Home</a>
                    </Link>
                </Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron'/>
                <Breadcrumb.Section link>
                    <Link href={`/steps/${step.id}`}>
                        <a>
                            {step.name}
                        </a>
                    </Link>
                </Breadcrumb.Section>
                <Breadcrumb.Divider icon='right arrow'/>
                <Breadcrumb.Section active>Action</Breadcrumb.Section>
            </Breadcrumb>

            <br/>&nbsp;

            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Header as='h2'>
                            <Icon name={step.icon} size='massive'/>
                            <Header.Content>
                                {step.name}
                                <Header.Subheader>{step.title}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' content={step.heading} textAlign='right'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider/>


            <Container fluid>
                {step.description}
            </Container>

            <Header as='h1'>How to do it?</Header>


            <Grid divided='vertically'>
                <Grid.Row columns={2}>

                    <Grid.Column stretched>
                        <Segment attached>

                            <div dangerouslySetInnerHTML={{__html: step.content}}/>

                        </Segment>
                    </Grid.Column>
                    <Grid.Column stretched>
                        <Segment attached>


                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>


            <Header as='h1'>Useful Articles</Header>

            {(arrayLength > 0)?

                <Articles articles={step.articles}/> : <p>Error: No items defined.</p>

            }

            <Header as='h1'>Links and Resources</Header>


        </Layout>
    )
}

export async function getServerSideProps({params}) {
    const step = await fetchQuery('steps', `${params.stepId}`)

    return {
        props: {
            step
        }
    }
}
