import {Button, Container, Header, Icon, Image, Label, Message, Grid} from "semantic-ui-react";
import Link from 'next/link'
import moment from 'moment'
import React from "react";
import {Divider} from "semantic-ui-react";

export default function Intro({isLoggedIn}) {

    const meetingDate = (moment(new Date()).get("isoWeekday") < moment(new Date()).isoWeekday("Monday") ?
        moment(new Date()).day("monday").add(1, 'week').hours(18).minutes(30).format('dddd Do MMMM YYYY HH:mm') :
        (moment(new Date()).get("isoWeekday") < moment(new Date()).isoWeekday("Wednesday") ?
            moment(new Date()).day("saturday").hours(10).minutes(30).format('dddd Do MMMM YYYY HH:mm') :
            moment(new Date()).day("wednesday").hours(19).minutes(0).format('dddd Do MMMM YYYY HH:mm')));

    let button;
    if (isLoggedIn) {
        button = <Link href="/"><Button primary>More<Icon name='right chevron'/></Button></Link>;
    } else {
        button = <Link href="/signin"><Button secondary>Sign in<Icon name='right chevron'/></Button></Link>;
    }

    return (
        <>
            <Header as='h3'> Welcome to our site!</Header>
                <Grid>
                    <Grid.Row columns={1}>
                        <Grid.Column>

                            <p>Use these self help pages as guidance
                                to help you through the court process.
                                Ensure you have completed each of the steps. Please ask for help at the FNF
                                meetings if you are stuck and need more advice.
                            </p>

                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1}>
                        <Grid.Column>

                            <Message negative>
                                <Message.Header>
                                    <Grid>
                                    <Grid.Row columns={2}>
                                        <Grid.Column width={14}>
                                            <Header as='h3'>Weekly meeting ( Every Monday 7pm, Wednesday 6.30pm, Saturday 10.30am - By Invite only)</Header>
                                            Next Online Zoom Event - &nbsp;
                                            <Label as='a' image size='large'>
                                                <Icon name='calendar outline'/>{meetingDate}
                                            </Label>
                                        </Grid.Column>
                                        <Grid.Column width={2}>
                                                {button}
                                        </Grid.Column>
                                    </Grid.Row>
                                    </Grid>
                                </Message.Header>
                            </Message>

                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={2}>
                        <Grid.Column stretched>
                            <Message>
                                <Message.Header>
                            <Header as='h3'>Community</Header>
                                </Message.Header>
                                <p>
                                The Harrow FNF self help is for everyone, with a strong community sitting
                                behind it. It brings together parents where you can share and talk through
                                your situation with others in similar circumstances and be with other people
                                who know how you feel and can give you ideas.

                                You can contribute to Harrow FNF by:
                            </p>

                            <ul>
                                <li>
                                    <Link href="/">
                                        <a>Participating in the forums and group chats</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a>Helping us write more guides to help others</a>
                                    </Link>
                                </li>
                            </ul>
                            </Message>

                            <Message success>
                                <Message.Header>
                                    <Header as='h3'>Online</Header>
                                </Message.Header>
                                <Message.Content>
                                    <Header as='h4'>Social forums</Header>
                                    Meet other parents on our Whatapps group (By Invite only) &nbsp;

                                    <Container textAlign='right'>

                                        {button}

                                    </Container>

                                </Message.Content>
                            </Message>

                        </Grid.Column>
                        <Grid.Column stretched>
                            <Message>
                                <Message.Header>
                            <Header as='h3'>Success Stories</Header>
                                </Message.Header>
                            Hear the success stories of parents who have ended up with the best
                            outcomes and see the parent we have helped reunited with their children.
                            <Image src='/images/family-cartoon-diversity.png' alt="Success stories" size='huge'
                                   centered/>

                            <Container textAlign='right'>
                                {button}
                            </Container>

                            </Message>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </>
    )
}
