import Layout from '@/components/Layout'
import Link from 'next/link'
import { baseUrl, fetchQuery } from '@/lib/api-fnf'
import {Steps} from '@/components/Steps'
import {Header, Icon, Breadcrumb, Container, Divider, Grid} from 'semantic-ui-react'

export default function Journey({ journey }) {
    return (
        <Layout title={journey.name} description={journey.description}>

            <Breadcrumb>
                <Breadcrumb.Section link>
                    <Link href={`/`}>
                        <a>Home</a>
                    </Link>
                </Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section link>
                    <Link href={`/maps/${journey.id}`}>
                        <a>
                            {journey.name}
                        </a>
                    </Link>
                </Breadcrumb.Section>
                <Breadcrumb.Divider icon='right arrow' />
                <Breadcrumb.Section active>Action</Breadcrumb.Section>
            </Breadcrumb>

            <br/>&nbsp;

            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Header as='h2'>
                            <Icon name={journey.icon} size='massive' />
                            <Header.Content>
                                {journey.name}
                                <Header.Subheader>{journey.title}</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' content={journey.heading} textAlign='right'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider />

            <Container fluid>
                {journey.description}
            </Container>

            <Header as='h1'>What you need to do?</Header>


            <Steps steps={journey.steps}/>


        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const journey = await fetchQuery('journeys', `${params.journeyId}`)

    return {
        props: {
            journey
        }
    }
}
