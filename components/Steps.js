import {fetchQuery} from '@/lib/api-fnf'
import React, {useState} from 'react';
import Link from 'next/link'
import { Icon, Segment, Step, Button, Container, Grid, Progress} from 'semantic-ui-react'
import {Stepbody} from '@/components/Stepbody'

export function Steps({steps}) {


    const [currentPage, setCurrentPage] = useState(0)
    const currentStep = steps[currentPage]
    const arrayLength = steps.length

    const next = () => setCurrentPage((prev) => prev + 1)
    const prev = () => setCurrentPage((prev) => prev - 1)
    const isActive = (index) => (index == currentPage)
    const isCompleted = (index) => (index == currentPage)? false : (index < currentPage +1 )
    const isBackDisabled = (currentPage == 0)
    const isNextDisabled = (currentPage >= arrayLength -1)
    const percent = (1/arrayLength) * 100 + (currentPage/arrayLength) * 100

    return (
        (arrayLength > 0 )?
        <>
            <Grid>
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

            <Grid columns={2}>
                <Grid.Row stretched>
                <Grid.Column>
            <Step.Group fluid vertical>
                {
                    steps.map((stepsArray, index) => (
                        <Step key={index} active={isActive(index)} completed={isCompleted(index)}>
                            <Icon name={stepsArray.step.icon}/>
                            <Step.Content>
                                <Step.Title>
                                    <Link href={`/steps/${stepsArray.step.id}`}>
                                        <a>{index + 1}.{stepsArray.step.name}</a>
                                    </Link>
                                </Step.Title>
                                <Step.Description>{stepsArray.step.title}</Step.Description>
                            </Step.Content>
                        </Step>
                    ))
                }
            </Step.Group>

                </Grid.Column>

                <Grid.Column>
                    <Segment attached>
                        <Stepbody step={currentStep.step}/>
                    </Segment>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Progress percent={percent} indicating/>
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
        </>
        :
    <p>Error: No items defined.</p>
    )
}

export async function getStaticProps({ params }) {
    const step = await fetchQuery('steps', `${params.stepId}`)

    return {
        props: {
            step
        }
    }
}

export async function getStaticPaths() {
    const steps = await fetchQuery('steps')
    const paths = steps.map((step) => {
        return {
            params: { stepId: String(step.id) }
        }
    })

    return {
        paths,
        fallback: false
    }
}
