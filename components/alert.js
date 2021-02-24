import {Container} from 'semantic-ui-react'
import cn from 'classnames'

export default function Alert({ preview }) {
  return (
    <div>
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
                <div className="govuk-phase-banner">
                    <p className="govuk-phase-banner__content">
                        <strong className="govuk-tag govuk-phase-banner__content__tag">
                            alpha
                        </strong>
                        <span className="govuk-phase-banner__text">
                            This is a new service – your <a className="govuk-link" href="#">feedback</a> will help us to improve it.
                       </span>
                    </p>
                </div>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
