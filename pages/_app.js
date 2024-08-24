import { useEffect } from 'react';
import Head from "next/head";
import AOS from "aos";

import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css'

import '../styles/globals.scss'

import '/styles/header.scss'
import '/styles/outer.scss'
import '/styles/gooery.scss'
import '/styles/works.scss'
import '/styles/side-element.scss'
import '/styles/myself.scss'
import '/styles/graphics.scss'
import '/styles/projects.scss'
import '/styles/maps.scss'
import '/styles/views-title.scss'
import '/styles/hover-image.scss'
import '/styles/window-screen.scss'
import '/styles/reviews.scss'
import '/styles/top-scrolled-bar.scss'
import '/styles/contact.scss'
import '/styles/cursor.scss'
import '/styles/afzalimdad.scss'
import '/styles/pre-loader.scss'
import '/styles/certifications.scss'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
    import("aos/dist/aos.js");
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="../public/icons/16.png"
          rel="icon"
          type="image/png"
          sizes="16x16" />
        <link
          href="../public/icons/32.png"
          rel="icon"
          type="image/png"
          sizes="32x32" />
        <link rel="apple-touch-icon" href="../public/icons/16.png"></link>
        <link rel="apple-touch-icon" href="../public/icons/32.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
