import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Ramaraja&display=swap'
            rel='stylesheet'
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Hurricane&family=Ramaraja&display=swap'
            rel='stylesheet'
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Dancing+Script&family=Hurricane&family=Ramaraja&display=swap'
            rel='stylesheet'
          ></link>
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap'
            rel='stylesheet'
          ></link>
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
