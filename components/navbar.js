import Link from 'next/link'
import {Container} from 'semantic-ui-react'

export default function Navbar() {
    return (

<nav className="app-navigation govuk-clearfix">
    <Container>
    <ul className="app-navigation__list app-width-container">

        <li className="app-navigation__list-item">
            <Link href="/">
                <a className="govuk-link govuk-link--no-visited-state app-navigation__link" data-topnav="Styles">
                    Home
                </a>
            </Link>
        </li>

        <li className="app-navigation__list-item">
            <Link href="/maps/1">
                <a className="govuk-link govuk-link--no-visited-state app-navigation__link" data-topnav="Styles">
                    Child Access
                </a>
            </Link>
        </li>

        <li className="app-navigation__list-item">
            <Link href="/maps/3">
                <a className="govuk-link govuk-link--no-visited-state app-navigation__link" data-topnav="Styles">
                    Divorce
                </a>
            </Link>
        </li>

        <li className="app-navigation__list-item">
            <Link href="/maps/15">
                <a className="govuk-link govuk-link--no-visited-state app-navigation__link" data-topnav="Styles">
                    Health &amp; Wellbeing
                </a>
            </Link>
        </li>

        <li className="app-navigation__list-item">
            <Link href="/blog">
                <a className="govuk-link govuk-link--no-visited-state app-navigation__link" data-topnav="Styles">
                    Useful Information
                </a>
            </Link>
        </li>

        <li className="app-navigation__list-item">
            <Link href="/">
                <a className="govuk-link govuk-link--no-visited-state app-navigation__link" data-topnav="Styles">
                    Contact us
                </a>
            </Link>
        </li>

    </ul>
    </Container>
</nav>

    )
}
