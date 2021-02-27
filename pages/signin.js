import LoginForm from '@/components/LoginForm';
import React from 'react'
import {SITE_NAME, SITE_TITLE, SITE_URL} from '@/lib/constants'
import { Container, Header, Menu} from 'semantic-ui-react'
import Link from 'next/link'


const SignIn = () => {
    return (
        <>

            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                        <Link href="/">
                            <Header as='h2' image='/images/120x80px-fnf-logo.png' content={SITE_NAME} color='yellow'/>
                        </Link>
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Header as='h2' content={SITE_TITLE} textAlign='right' inverted color='grey'/>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>

            <LoginForm/>

        </>


    );
};

export default SignIn;
