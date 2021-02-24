import {fetchQuery} from '@/lib/api-fnf'
import React, {useState} from 'react';
import Link from 'next/link'
import {Icon, Segment, Step, Button, Container, Grid, Progress} from 'semantic-ui-react'
import {Journey} from '@/components/Journey'


export function Journeys({journeys, mapName}) {


    const [currentPage, setCurrentPage] = useState(0)
    const currentJourney = journeys[currentPage]
    const arrayLength = journeys.length

    const next = () => setCurrentPage((prev) => prev + 1)
    const prev = () => setCurrentPage((prev) => prev - 1)
    const isActive = (index) => (index == currentPage)
    const isCompleted = (index) => (index < currentPage)
    const isBackDisabled = (currentPage == 0)
    const isNextDisabled = (currentPage >= arrayLength-1)

    const percent = (1/arrayLength) * 100 + (currentPage/arrayLength) * 100

    return (
        (arrayLength > 0 )?
        <>
            <Grid divided='vertically'>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <p>Navigate through the following steps to progress through the court process.</p>
                    </Grid.Column>
                    <Grid.Column>
                        <Container textAlign='right'>
                            <Button.Group>
                                <Button primary onClick={prev} disabled={isBackDisabled}> <Icon name='left chevron'/> Back</Button>
                                <Button.Or/>
                                <Button primary onClick={next} disabled={isNextDisabled}>Next <Icon name='right chevron'/></Button>
                            </Button.Group>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Step.Group widths={arrayLength} attached='bottom'>
                {
                    journeys.map((journeyArray, index) => (
                        <Step key={index} active={isActive(index)} completed={isCompleted(index)}>
                            <Icon name={journeyArray.journey.icon}/>
                            <Step.Content>
                                <Step.Title>
                                    <Link href={`/journeys/${journeyArray.journey.id}`}>
                                        <a>{index + 1}.{journeyArray.journey.name}</a>
                                    </Link>
                                </Step.Title>
                                <Step.Description>{journeyArray.journey.title}</Step.Description>
                            </Step.Content>
                        </Step>
                    ))
                }
            </Step.Group>
            <Segment attached>
                <Journey journey={currentJourney} mapName={mapName}/>
            </Segment>
            <br/>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column width={12}>
                        <Progress percent={percent} indicating/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Container textAlign='right'>
                            <Button.Group>
                                <Button primary onClick={prev} disabled={isBackDisabled}> <Icon name='left chevron'/> Back</Button>
                                <Button.Or/>
                                <Button primary onClick={next} disabled={isNextDisabled}>Next <Icon name='right chevron'/></Button>
                            </Button.Group>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
            :
            <p>Error: No journeys defined.</p>
    )
}
