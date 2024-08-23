import React, { useEffect, useState } from 'react'

const consoleMyName = () => {
    console.log(`
  Designed and Developed By www.muneebwasikhan.com
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

const WaterMark = () => {
    useEffect(consoleMyName, [])
    return <></>
}

export default React.memo(WaterMark)
