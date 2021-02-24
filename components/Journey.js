import Link from 'next/link'
import {baseUrl} from '@/lib/api-fnf'
import {Header, Button, Container, Icon} from 'semantic-ui-react'

export function Journey({journey}) {
    return (
        <>
            <Container fluid>
                <Header as='h2'>{journey.journey.name}</Header>
                <p>{journey.journey.description}</p>

                <Container textAlign='right'>
                    <Link href={`/journeys/${journey.journey.id}`}>
                        <a>
                            <Button primary>
                                Start here
                                <Icon name='right chevron'/>
                            </Button>
                        </a>
                    </Link>
                </Container>

            </Container>
        </>
    )
}
