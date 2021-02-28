import Layout from '@/components/Layout'
import {SITE_NAME, SITE_TITLE, SITE_URL} from '@/lib/constants'
import {fetchQuery} from '@/lib/api-fnf'
import {Maps} from '@/components/Maps'
import React from "react";
import Intro from '@/components/Intro';
import {useState, useContext} from 'react'
import UserContext from '@/components/UserContext';
import {Header, Divider, Message, Form, Grid, Container} from "semantic-ui-react";

export default function Home({allMapsData}) {

    const [search, setSearch] = useState('');
    const {user} = useContext(UserContext)

    return (
        <>
            <Layout title={SITE_NAME} description={SITE_TITLE}>
                <main id="main-content" role="main">
                    &nbsp;
                    <Header>
                        { user != null && user != '' &&
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
                            <Maps maps={allMapsData.filter(map => map.name.toLowerCase().includes(search.toLowerCase()))}/>
                        </Message>
                    </>
                    }

                </main>

            </Layout>
        </>
    )
}


export async function getStaticProps() {
    // const mapsData = await fetchQuery('maps')
    return {
        props: {
            allMapsData
        }
    }
}

export const allMapsData = [
    {
        "id": 2,
        "name": "Mediation",
        "description": "Using mediation for parties to reach an agreement.",
        "slug": "mediation",
        "published_at": "2021-02-06T02:03:52.049Z",
        "created_at": "2021-02-06T02:03:49.799Z",
        "updated_at": "2021-02-15T17:14:12.051Z",
        "title": " Reaching an agreement",
        "icon": "handshake outline",
        "journeys": [
            {
                "id": 7,
                "journey": {
                    "id": 2,
                    "description": "Before you apply, please make sure you have attended (either remotely or in person) a MIAM, unless you have a valid exemption (a meeting about mediation and other ways of resolving your dispute without needing to use the court)",
                    "type": 9,
                    "name": "Mediation",
                    "published_at": "2021-02-06T02:00:03.262Z",
                    "created_at": "2021-02-06T01:59:51.585Z",
                    "updated_at": "2021-02-15T13:46:29.297Z",
                    "icon": "certificate",
                    "title": "Obtain a MIAM certificate"
                },
                "name": "Attend Mediation"
            }
        ],
        "types": [
            {
                "id": 9,
                "name": "MEDIATION",
                "description": "Mediation",
                "label": "mediation",
                "published_at": "2021-02-06T01:43:28.352Z",
                "created_at": "2021-02-06T01:43:20.193Z",
                "updated_at": "2021-02-06T01:43:28.373Z"
            }
        ]
    },
    {
        "id": 1,
        "name": "Child Access",
        "description": "Help with custody battle and child matters.",
        "slug": "child-access",
        "published_at": "2021-02-06T02:03:15.059Z",
        "created_at": "2021-02-06T02:03:10.998Z",
        "updated_at": "2021-02-15T17:30:51.989Z",
        "title": "Child cases and custody",
        "icon": "child",
        "journeys": [
            {
                "id": 1,
                "journey": {
                    "id": 2,
                    "description": "Before you apply, please make sure you have attended (either remotely or in person) a MIAM, unless you have a valid exemption (a meeting about mediation and other ways of resolving your dispute without needing to use the court)",
                    "type": 9,
                    "name": "Mediation",
                    "published_at": "2021-02-06T02:00:03.262Z",
                    "created_at": "2021-02-06T01:59:51.585Z",
                    "updated_at": "2021-02-15T13:46:29.297Z",
                    "icon": "certificate",
                    "title": "Obtain a MIAM certificate"
                },
                "name": "Attend Mediation"
            },
            {
                "id": 2,
                "journey": {
                    "id": 1,
                    "description": "As this involves children and the legal system, both parents will need to attend court and the judge will need to agree that it is in the child’s best interest to make an order. We will instruct a solicitor to prepare a C100 Form and Child Consent Order based on your parenting plan. This will be submitted to your local court and you will be given a date to attend a hearing. Unless there are safeguarding issues, the judge will usually make your arrangements into a legally binding order. \\n\\nThis order can then be enforced through the courts should one of you break the terms and it shows what legal arrangements are in place for the children should any issues arise in the future.",
                    "type": 2,
                    "name": "Court Application",
                    "published_at": "2021-02-06T01:50:53.517Z",
                    "created_at": "2021-02-06T01:50:51.130Z",
                    "updated_at": "2021-02-15T13:46:04.133Z",
                    "icon": "envelope outline",
                    "title": "Submit application form to court"
                },
                "name": "Apply to Court"
            },
            {
                "id": 3,
                "journey": {
                    "id": 3,
                    "description": "You will have a telephone call interview",
                    "type": 2,
                    "name": "CAFCASS",
                    "published_at": "2021-02-06T02:00:26.606Z",
                    "created_at": "2021-02-06T02:00:16.630Z",
                    "updated_at": "2021-02-15T17:18:21.963Z",
                    "icon": "phone volume",
                    "title": "Telephone call interview"
                },
                "name": "CAFCASS Interview"
            },
            {
                "id": 4,
                "journey": {
                    "id": 4,
                    "description": null,
                    "type": 2,
                    "name": "FHDRA",
                    "published_at": "2021-02-15T14:06:51.433Z",
                    "created_at": "2021-02-15T14:05:07.809Z",
                    "updated_at": "2021-02-15T17:24:39.282Z",
                    "icon": "university",
                    "title": "First dispute resolution hearing in court "
                },
                "name": "FHDRA"
            },
            {
                "id": 5,
                "journey": {
                    "id": 5,
                    "description": null,
                    "type": 2,
                    "name": "Fact Finding",
                    "published_at": "2021-02-15T14:12:41.437Z",
                    "created_at": "2021-02-15T14:12:39.388Z",
                    "updated_at": "2021-02-15T14:12:41.483Z",
                    "icon": "university",
                    "title": "Trial hearing in court for contested allegations"
                },
                "name": "FACT FINDING"
            },
            {
                "id": 6,
                "journey": {
                    "id": 6,
                    "description": null,
                    "type": 2,
                    "name": "Final Hearing",
                    "published_at": "2021-02-15T14:13:20.254Z",
                    "created_at": "2021-02-15T14:13:17.883Z",
                    "updated_at": "2021-02-15T14:13:20.283Z",
                    "icon": "university",
                    "title": "Hearing in court of final outcome"
                },
                "name": "FINAL Hearing"
            }
        ],
        "types": [
            {
                "id": 2,
                "name": "CHILD ARRANGEMENTS",
                "description": "Childrens Proceedings",
                "label": "child-arrangements",
                "published_at": "2021-02-06T01:40:49.776Z",
                "created_at": "2021-02-06T01:40:39.179Z",
                "updated_at": "2021-02-06T01:47:57.276Z"
            }
        ]
    },
    {
        "id": 9,
        "name": "Counselling",
        "description": "Help with relationships within families support.",
        "slug": "counselling",
        "published_at": "2021-02-15T13:41:17.624Z",
        "created_at": "2021-02-15T13:41:14.980Z",
        "updated_at": "2021-02-15T13:41:17.662Z",
        "title": "Family counselling support",
        "icon": "user md",
        "journeys": [],
        "types": [
            {
                "id": 10,
                "name": "COUNSELLING",
                "description": "Family and Child Counselling Help",
                "label": "counselling",
                "published_at": "2021-02-06T01:43:41.208Z",
                "created_at": "2021-02-06T01:43:38.834Z",
                "updated_at": "2021-02-06T01:43:41.227Z"
            }
        ]
    },
    {
        "id": 10,
        "name": "Complaints",
        "description": "Help with complaining against professional misconduct.",
        "slug": "complaints",
        "published_at": "2021-02-15T13:41:50.472Z",
        "created_at": "2021-02-15T13:41:47.301Z",
        "updated_at": "2021-02-15T13:41:50.497Z",
        "title": "Complaints procedures",
        "icon": "comments",
        "journeys": [],
        "types": [
            {
                "id": 10,
                "name": "COUNSELLING",
                "description": "Family and Child Counselling Help",
                "label": "counselling",
                "published_at": "2021-02-06T01:43:41.208Z",
                "created_at": "2021-02-06T01:43:38.834Z",
                "updated_at": "2021-02-06T01:43:41.227Z"
            }
        ]
    },
    {
        "id": 11,
        "name": "Child Abduction",
        "description": "Help with preventing child abduction and procedures.",
        "slug": "child-abduction",
        "published_at": "2021-02-15T13:42:34.966Z",
        "created_at": "2021-02-15T13:42:33.360Z",
        "updated_at": "2021-02-15T13:42:34.994Z",
        "title": "Unauthorised removal of a child",
        "icon": "plane",
        "journeys": [],
        "types": [
            {
                "id": 13,
                "name": "CHILD ABDUCTION",
                "description": "Child Abduction",
                "label": "child-abduction",
                "published_at": "2021-02-15T13:39:21.812Z",
                "created_at": "2021-02-15T13:39:19.850Z",
                "updated_at": "2021-02-15T13:39:21.836Z"
            }
        ]
    },
    {
        "id": 3,
        "name": "Divorce",
        "description": "Help with your divorce proceedings.",
        "slug": "divorce",
        "published_at": "2021-02-15T13:30:29.559Z",
        "created_at": "2021-02-15T13:30:14.174Z",
        "updated_at": "2021-02-15T13:30:29.585Z",
        "title": "Apply for Divorce",
        "icon": "heartbeat",
        "journeys": [],
        "types": [
            {
                "id": 3,
                "name": "DIVORCE",
                "description": "Divorce proceedings",
                "label": "divorce",
                "published_at": "2021-02-06T01:42:17.080Z",
                "created_at": "2021-02-06T01:41:07.728Z",
                "updated_at": "2021-02-06T01:42:17.106Z"
            }
        ]
    },
    {
        "id": 12,
        "name": "Child Maintenance",
        "description": "Help with dealing with the Child maintenance agency.",
        "slug": "child-maintenance",
        "published_at": "2021-02-15T13:43:08.042Z",
        "created_at": "2021-02-15T13:43:06.330Z",
        "updated_at": "2021-02-15T13:43:08.066Z",
        "title": "Support payments for you child",
        "icon": "money",
        "journeys": [],
        "types": [
            {
                "id": 5,
                "name": "CHILD MAINTENANCE",
                "description": "Child Maintenance",
                "label": "child-maintenance",
                "published_at": "2021-02-06T01:41:55.431Z",
                "created_at": "2021-02-06T01:41:46.734Z",
                "updated_at": "2021-02-06T01:41:55.457Z"
            }
        ]
    },
    {
        "id": 4,
        "name": "Criminal Law",
        "description": "Help with criminal  matter with the police and courts.",
        "slug": "criminal-law",
        "published_at": "2021-02-15T13:34:59.303Z",
        "created_at": "2021-02-15T13:34:50.005Z",
        "updated_at": "2021-02-15T13:34:59.328Z",
        "title": "Domestic violence cases",
        "icon": "gavel",
        "journeys": [],
        "types": [
            {
                "id": 6,
                "name": "CRIMINAL",
                "description": "Criminal Cases",
                "label": "criminal",
                "published_at": "2021-02-06T01:42:20.995Z",
                "created_at": "2021-02-06T01:42:06.144Z",
                "updated_at": "2021-02-06T01:42:21.016Z"
            }
        ]
    },
    {
        "id": 5,
        "name": "Family Law",
        "description": "Help to resolve family difficulties and other disputes.",
        "slug": "family-law",
        "published_at": "2021-02-15T13:36:24.510Z",
        "created_at": "2021-02-15T13:36:21.358Z",
        "updated_at": "2021-02-15T13:36:24.539Z",
        "title": "Other family law cases",
        "icon": "law",
        "journeys": [],
        "types": [
            {
                "id": 1,
                "name": "FAMILY",
                "description": "Family Law",
                "label": "family",
                "published_at": "2021-02-06T01:40:07.990Z",
                "created_at": "2021-02-06T01:40:04.548Z",
                "updated_at": "2021-02-06T01:40:08.018Z"
            }
        ]
    },
    {
        "id": 13,
        "name": "Appeals",
        "description": "Help with prepare and going for appeals in the court.",
        "slug": "appeals",
        "published_at": "2021-02-15T13:43:41.543Z",
        "created_at": "2021-02-15T13:43:39.369Z",
        "updated_at": "2021-02-15T13:43:41.562Z",
        "title": "Appealing court decisions",
        "icon": "university",
        "journeys": [],
        "types": [
            {
                "id": 12,
                "name": "APPEALS",
                "description": "Appeal Procedures",
                "label": "appeals",
                "published_at": "2021-02-15T13:39:03.573Z",
                "created_at": "2021-02-15T13:39:01.074Z",
                "updated_at": "2021-02-15T13:39:03.599Z"
            }
        ]
    },
    {
        "id": 6,
        "name": "Finances",
        "description": "Help with financial disclosure and division of assets.",
        "slug": "finances",
        "published_at": "2021-02-15T13:37:02.722Z",
        "created_at": "2021-02-15T13:36:59.832Z",
        "updated_at": "2021-02-15T13:37:02.771Z",
        "title": "Division of property and finances",
        "icon": "home",
        "journeys": [],
        "types": [
            {
                "id": 4,
                "name": "FINANCES",
                "description": "Finance Matters",
                "label": "finances",
                "published_at": "2021-02-06T01:41:35.200Z",
                "created_at": "2021-02-06T01:41:26.782Z",
                "updated_at": "2021-02-06T01:41:35.225Z"
            }
        ]
    },
    {
        "id": 14,
        "name": "Schools",
        "description": "Help with finding out about the child's school.",
        "slug": "schools",
        "published_at": "2021-02-15T13:44:14.895Z",
        "created_at": "2021-02-15T13:44:12.832Z",
        "updated_at": "2021-02-15T13:44:14.924Z",
        "title": "Schooling information and issues",
        "icon": "book",
        "journeys": [],
        "types": [
            {
                "id": 14,
                "name": "SCHOOLS",
                "description": "Child's Nursery and School",
                "label": "schools",
                "published_at": "2021-02-15T13:39:39.148Z",
                "created_at": "2021-02-15T13:39:37.399Z",
                "updated_at": "2021-02-15T13:39:39.169Z"
            }
        ]
    },
    {
        "id": 7,
        "name": "Disclosures",
        "description": "Help with obtaining disclosure and inspection in family proceedings",
        "slug": "disclosures",
        "published_at": "2021-02-15T13:37:42.153Z",
        "created_at": "2021-02-15T13:37:40.672Z",
        "updated_at": "2021-02-15T13:40:17.540Z",
        "title": "Requests for information",
        "icon": "info circle",
        "journeys": [],
        "types": [
            {
                "id": 11,
                "name": "DISCLOSURES",
                "description": "Requests for Information",
                "label": "disclosures",
                "published_at": "2021-02-15T13:38:33.604Z",
                "created_at": "2021-02-15T13:38:30.330Z",
                "updated_at": "2021-02-15T13:38:33.625Z"
            }
        ]
    },
    {
        "id": 8,
        "name": "General",
        "description": "Help with legal conduct and court procedures.",
        "slug": "general",
        "published_at": "2021-02-15T13:40:46.555Z",
        "created_at": "2021-02-15T13:40:44.164Z",
        "updated_at": "2021-02-15T13:40:46.583Z",
        "title": "General Legal Information",
        "icon": "question circle outline",
        "journeys": [],
        "types": [
            {
                "id": 7,
                "name": "GENERAL",
                "description": "General Advice",
                "label": "general",
                "published_at": "2021-02-06T01:42:41.883Z",
                "created_at": "2021-02-06T01:42:39.731Z",
                "updated_at": "2021-02-06T01:42:41.903Z"
            }
        ]
    },
    {
        "id": 15,
        "name": "Your health",
        "description": "Help and advice with taking care of your physical and mental health.",
        "slug": "your-health",
        "published_at": "2021-02-15T13:44:46.851Z",
        "created_at": "2021-02-15T13:44:45.119Z",
        "updated_at": "2021-02-15T13:44:46.875Z",
        "title": "Mental health and well being",
        "icon": "medkit",
        "journeys": [],
        "types": [
            {
                "id": 15,
                "name": "MENTAL HEALTH",
                "description": "Mental health and well being",
                "label": "mental-health",
                "published_at": "2021-02-15T13:39:55.667Z",
                "created_at": "2021-02-15T13:39:54.405Z",
                "updated_at": "2021-02-15T13:39:55.694Z"
            }
        ]
    }
]
