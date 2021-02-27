import {useState, useContext} from 'react';
import UserContext from '@/components/UserContext';
import {Button, Header, Image, Message, Segment, Grid, Form, Icon, Container} from "semantic-ui-react";
import React, {Component} from 'react';


const LoginForm = () => {

    const { signIn } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const authenticate = e => {
        e.preventDefault();
        if (username != '' || password != '') {
            signIn(username);
        } else {
            setMessage('Please enter your username and password');
        }
    };

    const handleDismiss = () => {
        setMessage('')
    }


    return (
        <Grid style={{height: '100vh'}} verticalAlign='middle' centered>
            <Grid.Column style={{maxWidth: 450}}>

                <Message attached>
                    <Message.Header>
                        <Header as='h4' color='yellow' textAlign='center'>
                            Welcome to our site!
                        </Header>
                    </Message.Header>
                    <Message.Content>
                        <Header as='h2' color='yellow' textAlign='center'>
                            <Image src='/images/120x80px-fnf-logo.png'/> Log-in to your account
                        </Header>
                    </Message.Content>
                </Message>
                <Form className='attached fluid segment'>
                    <Form.Input
                        label='Username'
                        fluid icon='user'
                        iconPosition='left'
                        placeholder='E-mail address'
                        type="text"
                        name="username"
                        onChange={e => setUsername(e.target.value)}
                    />
                    <Form.Input
                        label='Password'
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        name="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    {message != '' &&
                    <Message negative
                             icon='exclamation circle'
                             onDismiss={handleDismiss}
                             header='Login error'
                             content={message}
                    />
                    }
                    <Button color='yellow' fluid size='large' onClick={e => authenticate(e)}>
                        Login
                        <Icon name='right chevron'/>
                    </Button>
                </Form>
                <Message warning attached='bottom'>
                    <Header as='h4' color='yellow' textAlign='left'>
                        New to us? Sign up here instead
                    </Header>
                    <Container textAlign='right'><a href='#'> <Button primary>Sign up<Icon
                        name='right chevron'/></Button></a></Container>
                </Message>
            </Grid.Column>
        </Grid>

    )
}

export default LoginForm;
