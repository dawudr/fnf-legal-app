import Link from 'next/link'
import {baseUrl} from '@/lib/api-fnf'
import {Header, Button, Container, Icon, Image} from 'semantic-ui-react'
import React from "react";

export function Stepbody({step}) {
    return (
        <>
            <Container fluid>
                <Header as='h2'>{step.name}</Header>

                <p>{step.description}</p>

                <Container textAlign='right'>
                    <Link href={`/steps/${step.id}`}>
                        <a>
                            <Button>
                                More
                                <Icon name='right chevron'/>
                            </Button>
                        </a>
                    </Link>
                </Container>
            </Container>
        </>
    )
}
