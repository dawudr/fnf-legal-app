import Link from 'next/link'
import { SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/constants'
import {Container, Header, Menu} from 'semantic-ui-react'
import React from "react";
import { useState, useContext } from 'react'
import UserContext from '@/components/UserContext';

export default function Navbar() {

    const activeItem = 'home'

    const { user, signOut } = useContext(UserContext);

    let button;
    if (user != null && user != '') {
        button = <Menu.Item name='Logout' active={activeItem === 'logout'} onClick={signOut}></Menu.Item>;
    } else {
        button = <Menu.Item><Link href="/signin">Login</Link></Menu.Item>;
    }

    return (

        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header>
                    <Link href="/">
                        <Header as='h2' image='/images/120x80px-fnf-logo.png' content={SITE_NAME} color='yellow'/>
                    </Link>
                </Menu.Item>

                {user != null && user != '' &&
                <Menu.Item>
                    <Link href="/maps/1">
                        Child Access
                    </Link>
                </Menu.Item>
                }

                {user != null && user != '' &&
                <Menu.Item>
                    <Link href="/maps/3">
                        Divorce
                    </Link>
                </Menu.Item>
                }

                {user != null && user != '' &&
                <Menu.Item>
                    <Link href="/blog">
                        Guides
                    </Link>
                </Menu.Item>
                }

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Header as='h2' content={SITE_TITLE} textAlign='right' inverted color='grey'/>
                    </Menu.Item>
                    {button}
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
