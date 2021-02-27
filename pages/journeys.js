import Layout from '@/components/Layout'
import { Journey } from '@/components/Journey'
import { fetchQuery } from '@/lib/api-fnf'

export default function Journeys({ map }) {
    return (
    <>
        <Layout title={map.name} description={map.title}>

            <main className="govuk-main-wrapper app-main-class" id="main-content" role="main">
                <h1 className="govuk-heading-xl">Journeys</h1>

                <p className="govuk-body">
                    {
                        map.journeys.map((journey) => (
                            <Journey key={journey.name} map={journey}/>
                        ))
                    }
                </p>
            </main>

        </Layout>
    </>
    )
}


export async function getServerSideProps({ params }) {
    const map = await fetchQuery('maps', `${params.mapId}`)

    return {
        props: {
            map
        }
    }
}
