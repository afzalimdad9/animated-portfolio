// import 'bootstrap/dist/js/bootstrap.bundle'
import { useEffect, useState } from 'react';
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
import '/styles/muneeb-khan.scss'
import '/styles/pre-loader.scss'
import '/styles/certifications.scss'


const consoleMyName = () => {
  console.log(`
Designed and Developed By Muneeb Khan.
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMM________MMMMMMMM________MM____MMMMM____MMMM
MMMM____M____MMMMMM____M____MM____MMMM____MMMMM
MMMM____MM____MMMM____MM____MM____MMM____MMMMMM
MMMM____MMM____MM____MMM____MM____MM____MMMMMMM
MMMM____MMMM________MMMM____MM____M____MMMMMMMM
MMMM____MMMMM______MMMMM____MM_________MMMMMMMM
MMMM____MMMMMM____MMMMMM____MM____MM____MMMMMMM
MMMM____MMMMMMM__MMMMMMM____MM____MMM____MMMMMM
MMMM____MMMMMMMMMMMMMMMM____MM____MMMM____MMMMM
MMMM____MMMMMMMMMMMMMMMM____MM____MMMMM____MMMM
MMMM____MMMMMMMMMMMMMMMM____MM____MMMMMM____MMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
`)
}


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
    import("aos/dist/aos.js");
    AOS.init();
    consoleMyName()
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
