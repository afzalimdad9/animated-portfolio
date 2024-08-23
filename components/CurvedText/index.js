import React from 'react';
import PropTypes from 'prop-types';


function CurvedText({ text, radius }) {
  const characters = text.split('');
  const length = characters.length;
  const getDegree = (i) => {
    const multiplayer = (360 / radius) * -1.3;
    const indexPlacing = (i * 2) - length;
    const degree = indexPlacing * multiplayer;
    return degree
  }

  return (
    <>
      {characters.map((char, i) => (
        <div
          key={`heading-span-${i}`}
          style={{
            height: `${radius}px`,
            display: 'flex',
            alignItems: 'flex-end',
            transform: `rotate(${getDegree(i)}deg)`,
            transformOrigin: `6px  0px 0`,
            position: 'absolute'
          }}>
          {char}
        </div>
      ))}
    </>
  );
}

CurvedText.propTypes = {
  text: PropTypes.string.isRequired,
  radius: PropTypes.number,
};

export default CurvedText;
