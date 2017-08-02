import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
         <link href="/static/common.css" rel="stylesheet" />
       </Head>
       <body className="custom_class">
         {/* {this.props.customValue} */}
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}