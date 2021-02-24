import {SITE_NAME, SITE_TITLE, SITE_URL} from '@/lib/constants'
import utilStyles from "../styles/utils.module.css";

export default function Intro() {
    return (
        <section className={utilStyles.headingMd}>
            <p>[Your Self Introduction]</p>
            <p>
                (This is a sample website - you’ll be building a site like this on{' '}
                <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>

            <p className="govuk-body">
                Use this design system to make your service consistent with GOV.UK.
            </p>
        </section>
    )
}
