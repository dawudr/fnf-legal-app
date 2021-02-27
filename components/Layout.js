import Footer from '@/components/footer'
import {SITE_NAME, SITE_TITLE, SITE_URL} from '@/lib/constants'
import Navbar from '@/components/navbar'
import Head from 'next/head'
import React from 'react'
import {Container} from 'semantic-ui-react'


const Layout = ({children, title, description}) => (
    <>
        <Head>
            <meta name='description' content={description}/>
            <meta name="keywords"
                  content="Both Parents Matter FNF Both Parents Matter FNF Families Need Fathers Parental Alienation False allegations child maintenance ex partner mckenzie friend family law legal advice sir james munby cms csa contact denial false allegations divorce wikivorce personal support unit divorce enforcement children and families act parental alienation shared parenting separated dads separated fathers residence order contact order children contact centres custody of children child custody rights child rights prohibited steps order children 1989 children &amp; divorce children's act 1989 children act children custody rights emergency residence order children acts child custody and visitation child custody right custody information child custody how to win child custody questions change surname child custody legal advice child visitation lawyer child visitation rights child visitation attorney c100 c1a parenting plan winning child custody divorce and child custody child custody advice child custody help child custody information legal advice on child custody child support legal advice dads divorce child custody agreements custody advice children law children act legal child custody child visitation schedule contact children carers and disabled children act divorce and the children visitation lawyer carers and disabled childrens act cafcass children protection act child legal advice legal custody of children child law childrens acts visitation attorney child visitation attorneys visitation attorneys child visitation lawyers visitation lawyers custody legal advice children matters welfare checklist parental responsibility act how to get child custody children's custody help legal advice children child lawyer help child custody children legal rights children visitation rights adoption and children act children laws child contact order child residence order children residence order prohibited steps orders children legislation legal advice for child custody vulnerable children act children &amp; young persons act children young persons act children and young people act court residence order child rights act childrens protection act disabled children act adoption children act grandparents rights to children adoption and childrens act adoption &amp; children act 2002 the adoption and children act children scotland act visitation rights for children custody of children act children act legislation children's rights act children and adoption act 2006 children act 2006 children act 2004 every child matters children's legal advice child arrangements order contact order children contact court order specific issues order children act 1989 summary adoption and children scotland children act guidance child rights legislation children + custody children act education children act legislation no order principle children law act children act law welfare checklist children act disabled children act parental responsibility adoption children contact issues issues with contact with children contact order hearing children act section children and young peoples act children act every child matters protecting children act children act every child matters section 31 children act emergency contact order children act orders s47 children act children and adoption act 2002 children act policy the 1989 children act help childrens custody families need fathers dad.info"/>
            <link rel="shortcut icon" href="/favicon/favicon.ico"/>
            <title>{title}</title>
        </Head>
        <div>
            <Navbar/>

            <Container style={{marginTop: '5em'}}>
                <main>
                    {children}
                </main>
            </Container>

            <Footer/>
        </div>
    </>
)

export default Layout
