import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Content from '../lib/content.json'
import FooterContent from '../lib/footer.json'
import Categories from '../components/categories'
import Footer from '../components/footer'
import {
    PAGE_TITLE,
    PAGE_DESCRIPTION,
    PAGE_DESCRIPTION2,
    FEED_TITLE,
    FEED_URL,
    CANONICAL_URL,
    THEME_COLOR
} from '../lib/constants'
export const config = { unstable_runtimeJS: false }

export default function Home({content, footer}) {
    return (
        <div>
            <Head>
                <title>{PAGE_TITLE}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="{PAGE_DESCRIPTION}" />
                <meta name="theme-color" content="{THEME_COLOR}" />
                <link rel="canonical" href="{CANONICAL_URL}" />
                <link rel="alternate" type="application/rss+xml" title="{FEED_TITLE}" href="{FEED_URL}" />
            </Head>

            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">{PAGE_TITLE}</h1>
                            <p className="lead text-muted" dangerouslySetInnerHTML={{ __html: PAGE_DESCRIPTION2 }} />
                        </div>
                    </div>
                </section>
                <Categories categories={Content}/>
            </main>

            <footer className="text-muted py-5">
                <Footer footer={FooterContent}/>
            </footer>
            {
                //<Script src="/bootstrap/js/bootstrap.bundle.min.js" />
            }
        </div>
    )
}
