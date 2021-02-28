import Layout from '@/components/Layout'
import Link from 'next/link'
import { baseUrl, fetchQuery } from '@/lib/api-fnf'
import {Journey} from '@/components/Journey'
import React from 'react'
import {Header, Icon, Breadcrumb, Divider, Grid, Container} from 'semantic-ui-react'
import {Journeys} from '@/components/Journeys'

export default function Map({ map }) {

    return (
        <Layout title={map.title} description={map.description}>

            <Breadcrumb>
                <Breadcrumb.Section link>
                    <Link href={`/`}>
                        <a>Home</a>
                    </Link>
                </Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section link>
                    <Link href={`/maps/${map.id}`}>
                        <a>
                            {map.name}
                        </a>
                    </Link>
                </Breadcrumb.Section>
                <Breadcrumb.Divider icon='right arrow' />
                <Breadcrumb.Section active>Stages</Breadcrumb.Section>
            </Breadcrumb>

            <br/>&nbsp;

            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Header as='h2'>
                            <Icon name={map.icon}/>
                            <Header.Content>
                                {map.name}
                                <Header.Subheader>{map.title}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' content={map.heading} textAlign='right'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider />

            <Container fluid>
                {map.description}
            </Container>


            <Header as='h1'>Where do you need to start?</Header>

            <div>
                <Journeys journeys={map.journeys} mapName={map.name}/>
            </div>


        </Layout>
    )
}



export async function getServerSideProps({ params }) {
    const map = await fetchQuery('maps', `${params.mapId}`)

    return {
        props: {
            map
        }
    }
}
