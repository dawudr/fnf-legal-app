import {fetchQuery} from '@/lib/api-fnf'
import React, {useState} from 'react';
import Link from 'next/link'
import {Icon, Segment, Step, Button, Container, Grid, Progress, Header, Divider} from 'semantic-ui-react'
import {Stepbody} from '@/components/Stepbody'

export function Articles({articles}) {


    const arrayLength = articles.length


    return (
        (arrayLength > 0) ?
            <>
                    {
                        articles.map((article, index) => (
                            <Segment>

                                <Header as='h2' floated='right'>
                                    <Icon name='info' />
                                    <Header.Content>{article.title}</Header.Content>
                                </Header>
                                <Divider clearing />
                                {article.content}

                            </Segment>

                        ))
                    }
            </>
            :
            <p>Error: No items defined.</p>
    )
}

export async function getStaticProps({params}) {
    const articles = await fetchQuery('articles', `${params.articleId}`)

    return {
        props: {
            articles
        }
    }
}

export async function getStaticPaths() {
    const articles = await fetchQuery('articles')
    const paths = articles.map((article) => {
        return {
            params: {articleId: String(article.id)}
        }
    })

    return {
        paths,
        fallback: false
    }
}
