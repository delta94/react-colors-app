import React, { useState } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';

const gatherShades = (palette, colorId) => {
  const shades = [];
  const allColors = palette.colors;
  for (const key in allColors) {
    shades.push(allColors[key].find((color) => color.id === colorId));
  }
  return shades.slice(1);
};

function SingleColorPalette({ palette, colorId }) {
  const [format, setFormat] = useState('hex');
  const shades = gatherShades(palette, colorId);

  const colorBoxes = shades.map((color) => (
    <ColorBox
      key={color.name}
      background={color.hex}
      name={color.name}
      showLink={false}
    />
  ));

  return (
    <div>
      <Navbar format={format} setFormat={setFormat} showingAllColors={false} />
      <h1>SINGLE COLOR PALETTE</h1>
      <div>{colorBoxes}</div>
    </div>
  );
}

export default SingleColorPalette;
