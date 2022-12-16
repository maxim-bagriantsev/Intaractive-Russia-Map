import React from 'react';
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentInitialProps,
} from 'next/document';

class VcDocument extends Document {
    static async getInitialProps(ctx: any): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render(): JSX.Element {

        return (
            <Html lang="ru" prefix="og: http://ogp.me/ns#">
                <Head>
                    {/* FAVICON */}
                    <link rel="icon" href="/favicon.ico"/>
                    {/* FONTS */}
                    <link
                        rel="preload"
                        href="/fonts/SFPRODisplay-Bold.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/SFPROText-Bold.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/SFPROText-Medium.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/SFPROText-Regular.woff"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                    <link href="/fonts/style.css" rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default VcDocument;
