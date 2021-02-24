import CustomHeader from '@/components/customheader'
import Footer from '@/components/footer'
import { SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/constants'
import Navbar from '@/components/navbar'
import { Container} from 'semantic-ui-react'

export default function Layout({ children }) {
    return (
        <>
            <CustomHeader/>

            <Navbar/>

            <Container>

            <main>
                {children}
            </main>

            </Container>
            <Footer />
        </>
    )
}
