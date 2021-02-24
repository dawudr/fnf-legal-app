import Layout from '@/components/layout'
import { fetchQuery } from '@/lib/api-fnf'
import {Header, Breadcrumb, Divider} from 'semantic-ui-react'
import React from "react";
import Link from 'next/link'
import { Maps } from '@/components/Maps'


export default function Home({ maps }) {
    return (
        <Layout>
            <Breadcrumb>
                <Breadcrumb.Section link>
                    <Link href={`/home`}>
                        <a>Home</a>
                    </Link>
                </Breadcrumb.Section>
                <Breadcrumb.Divider icon='right chevron' />
                <Breadcrumb.Section link>Start </Breadcrumb.Section>
                <Breadcrumb.Divider icon='right arrow' />
                <Breadcrumb.Section active>Choose your case type</Breadcrumb.Section>
            </Breadcrumb>

            <Header as='h1'>What do you need help with?</Header>
            <Divider />
            <p>Select an area where you would like information on:</p>
            &nbsp;
            <Maps maps={maps}/>
            &nbsp;
        </Layout>
    )
}



export async function getServerSideProps() {
    const maps = await fetchQuery('maps')
    return {
        props: {
            maps
        }
    }
}
