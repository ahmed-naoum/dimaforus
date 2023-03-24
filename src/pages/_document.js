import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        {/* <!-- ========== Meta Tags ========== --> */}

          <meta charset="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta name="copyright" content="Dimaforus" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="theme-color" content="#000000" />
          {/* <!-- Open Graph / Facebook --> */}

          <meta property="og:site_name" content="Dimaforus" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://dimaforus.com/assets/img/dlogo.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* <!-- Twitter --> */}

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:image"
            content="https://dimaforus.com/assets/img/dlogo.png"
          />
          <meta property="twitter:image:width" content="1200" />
          <meta property="twitter:image:height" content="630" />
          
          {/* <!-- ========== Favicon Icon ========== --> */}

          <link
            rel="shortcut icon"
            href="assets/img/favicon.png"
            type="image/x-icon"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
