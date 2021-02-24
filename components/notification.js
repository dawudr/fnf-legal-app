import Container from '@/components/container'

export default function Notification({ title, children }) {
    return (
        <Container>
            <br/>
            <div className="govuk-notification-banner" role="region" aria-labelledby="govuk-notification-banner-title"
                 data-module="govuk-notification-banner">
                <div className="govuk-notification-banner__header">
                    <span className="govuk-notification-banner__title" id="govuk-notification-banner-title">
                        {title}
                    </span>
                </div>
                <div className="govuk-notification-banner__content">
                        {children}
                </div>
            </div>
        </Container>
    )
}
