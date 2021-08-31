import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import { Children } from 'react';
import { ServerStyleSheet } from 'styled-components';

export default class BivocalBirdsDoc extends Document {
  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <link rel='shortcut icon' href='/favicon.ico' />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');`,
            }}
          />
          <script async src='https://r.wdfl.co/rw.js' data-rewardful='a0717b' />

<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s){
  if(f.fbq) return;
  n=f.fbq=function(){
    n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)
  };
  if(!f._fbq) f._fbq=n;
  n.push=n;
  n.loaded=!0;
  n.version='2.0';
  n.queue=[];
  t=b.createElement(e);
  t.async=!0;
  t.src=v;
  s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}
  (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '600194914309916');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=600194914309916&ev=PageView&noscript=1" /></noscript>
<!-- End Facebook Pixel Code -->


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

BivocalBirdsDoc.getInitialProps = async (ctx: DocumentContext) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...Children.toArray(initialProps.styles),
        sheet.getStyleElement(),
      ],
    };
  } finally {
    sheet.seal();
  }
};
