import { fetchQuery } from '@/lib/api-fnf'
import {Header, Button, Card, Container, Icon} from 'semantic-ui-react'
import React from "react";
import Link from 'next/link'


export function Maps({ maps }) {
    return (
        <Card.Group itemsPerRow={3}>
        {
            maps.map((map) => (
                <Card key={map.id}>
                    &nbsp;
                    <Header icon>
                        <Container>
                            <Icon name={map.icon} size='big'/>
                            {map.name}
                        </Container>
                        <Header.Subheader>
                            {map.title}
                        </Header.Subheader>
                    </Header>

                    <Card.Content>
                        {/*<Card.Header>*/}
                        {/*{map.name}*/}
                        {/*</Card.Header>*/}
                        {/*<Card.Meta>*/}
                        {/*{map.title}*/}
                        {/*</Card.Meta>*/}
                        <Card.Description>
                            {map.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Link href={`/maps/${map.id}`}>
                            <a>

                                <Button primary floated='right'>
                                    Start here
                                    <Icon name='right chevron'/>
                                </Button>
                            </a>
                        </Link>
                    </Card.Content>
                </Card>
            ))
        }
        </Card.Group>
    )
}
