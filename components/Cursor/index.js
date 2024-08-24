import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

function Cursor() {

  const [x, handleX] = useState(0)
  const [y, handleY] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", mouseMove);
  }, []);

  function mouseMove(e) {
    handleX(e.clientX)
    handleY(e.clientY)
  }

  return (
    <div
    >
      <div
        style={{
          top: y,
          left: x,
        }}
        className='ai-cursor-line-box'
      >
        <div className='ai-cursor-line-right-1' />

        <div className='ai-cursor-line-bottom-1' />
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
