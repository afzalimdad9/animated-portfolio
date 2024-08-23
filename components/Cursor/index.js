import React, { useEffect, useState } from 'react';
// import AnimatedCursor from 'react-animated-cursor';
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

function Cursor() {

  const [x, handleX] = useState(0)
  const [y, handleY] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
    // scrollColor()
  }, []);

  function mouseMove(e) {
    handleX(e.clientX)
    handleY(e.clientY)
  }

  return (
    <div
    >
      <div
        // onClick={(event) => {
        //   // event.preventDefault();
        //   console.log('clicking')
        // }}
        style={{
            // top: y+500,
            // left: x-500,
            top: y,
            left: x,
          }}
        className='mk-cursor-line-box'
      >
        {/* <div
          className='mk-cursor-line mk-cursor-line1' /> */}
          <div className='mk-cursor-line-right-1' />
          {/* <div className='mk-cursor-line-right-2' /> */}

          <div className='mk-cursor-line-bottom-1' />
          {/* <div className='mk-cursor-line-bottom-2' /> */}
        {/* <div */}
          {/* // className='mk-cursor-line mk-cursor-line2' /> */}
      </div>
      <AnimatedCursor
        innerSize={4}
        outerSize={28}
        outerAlpha={0}
        innerScale={4}
        outerScale={0}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          'svg',
          '.link'
        ]}
        outerStyle={{
          border: '1px solid var(--themeColor4)',
        }}
        innerStyle={{
          backgroundColor: 'var(--themeColor4)'
        }}
      />
    </div>
  );
}

export default Cursor;
