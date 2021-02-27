import {useContext} from 'react';
import {Button, Icon, Header, Message} from 'semantic-ui-react'
import React from "react";
import UserContext from '@/components/UserContext';
import Link from 'next/link'

const UserInfo = () => {
    const {user, signOut} = useContext(UserContext);

    return (
        <>
            <Header textAlign='left'>
                Hello, <strong>{user}</strong> <Link href="/signin"><a onclick={signOut}> (Not you?)</a></Link>
            </Header>
        </>
    );
};

export default UserInfo;
