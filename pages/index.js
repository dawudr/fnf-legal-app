import Layout from '@/components/Layout'
import {SITE_NAME, SITE_TITLE, SITE_URL} from '@/lib/constants'
import {fetchQuery} from '@/lib/api-fnf'
import {Maps} from '@/components/Maps'
import React from "react";
import Intro from '@/components/Intro';
import {useState, useContext} from 'react'
import UserContext from '@/components/UserContext';
import {Header, Divider, Message, Form, Grid, Container} from "semantic-ui-react";

export default function Home({mapsData}) {

    const [search, setSearch] = useState('');
    const {user} = useContext(UserContext)

    return (
        <>
            <Layout title={SITE_NAME} description={SITE_TITLE}>
                <main id="main-content" role="main">
                    &nbsp;
                    <Header>
                        {user != null && user != '' &&
                        <>
                            Hello, <strong>{user}</strong>. &nbsp;
                        </>
                        }
                        Welcome to our site!
                    </Header>

                    <Intro isLoggedIn={user != null && user != ''}/>

                    {user != null && user != '' &&
                    <>
                        <Message>
                            <Message.Header>
                                <Header as='h3'>Self Help Pages</Header>
                            </Message.Header>
                            <Form className='attached fluid'>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid
                                        label='Search by topic or keyword'
                                        icon='search'
                                        placeholder='Search...'
                                        value={search}
                                        onChange={e => setSearch(e.currentTarget.value)}
                                    />
                                </Form.Group>
                            </Form>

                            <Divider/>
                            <Maps
                                maps={mapsData.filter(map => map.name.toLowerCase().includes(search.toLowerCase()))}/>
                        </Message>
                    </>
                    }

                </main>

            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const mapsData = await fetchQuery(
        'maps'
    ).then((response) => response);
    return {
        props: { mapsData },
    };
};
